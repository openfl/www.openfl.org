#!/usr/bin/env python3
"""Write the latest Lime and OpenFL releases to a Jekyll data file.

Usage: python3 _scripts/releases.py _data/releases.json

The landing page shows these releases when the file exists, and leaves the
section out when it does not, so a failed request never breaks the build.
Set GITHUB_TOKEN to raise GitHub's rate limit.
"""

import json
import os
import re
import sys
import urllib.request

REPOSITORIES = {
    "lime": ("Lime", "openfl/lime"),
    "openfl": ("OpenFL", "openfl/openfl"),
}


def fetch(url, token=None):
    request = urllib.request.Request(url, headers={"User-Agent": "lime-openfl-website"})
    if token and url.startswith("https://api.github.com/"):
        request.add_header("Authorization", "Bearer " + token)
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8")


def latest_release(key, title, repository, token):
    release = json.loads(fetch("https://api.github.com/repos/%s/releases/latest" % repository, token))
    tag = release["tag_name"]

    # Release notes link the forum announcement, which may cover more than one release
    announcement = None
    match = re.search(r"\[[^\]]*\]\((https://community\.openfl\.org/[^)\s]+)\)", release.get("body") or "")
    if match:
        announcement = match.group(1)

    summary = None
    try:
        haxelib = json.loads(fetch("https://raw.githubusercontent.com/%s/%s/haxelib.json" % (repository, tag)))
        summary = haxelib.get("releasenote")
    except Exception as error:
        print("releases.py: no release note for %s %s: %s" % (title, tag, error), file=sys.stderr)

    return {
        "name": title,
        "version": tag,
        "date": release["published_at"],
        "summary": summary,
        "release": release["html_url"],
        "changelog": "https://github.com/%s/blob/%s/CHANGELOG.md" % (repository, tag),
        "announcement": announcement,
        "haxelib": "https://lib.haxe.org/p/%s/%s/" % (key, tag),
        "all_releases": "https://github.com/%s/releases" % repository,
    }


def main():
    if len(sys.argv) != 2:
        print(__doc__.strip(), file=sys.stderr)
        return 2

    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    releases = {}

    for key, (title, repository) in REPOSITORIES.items():
        try:
            releases[key] = latest_release(key, title, repository, token)
        except Exception as error:
            print("releases.py: could not read the latest %s release: %s" % (title, error), file=sys.stderr)
            return 0

    with open(sys.argv[1], "w", encoding="utf-8") as output:
        json.dump(releases, output, indent=2)
        output.write("\n")

    for release in releases.values():
        print("releases.py: %s %s" % (release["name"], release["version"]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
