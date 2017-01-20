---
title: Upcoming Changes to How We Name Versions
---

We have been receiving feedback that upgrading from old OpenFL releases to a current release can be difficult.

Lime is continuing to evolve as a project, but OpenFL is not a moving target. As we are able to continue to invest in Lime as a foundation layer for Flash, native and HTML5 unified projects, OpenFL is pursuing an established, proven API standard. As such, over the course of a year, we can expect Lime to continue to make backward-incompatible changes as it matures, but OpenFL should remain backward compatible for the majority of the API -- an API we have supported for almost seven years.

Backward compatibility is one reason OpenFL does not show internal APIs in code completion. This is also one motivation for trying to strictly avoid adding new APIs to OpenFL. From one version to the next, the mission of OpenFL remains the same, and we hope that we continue to "make good on that promise" with increasing clarity over time.

We have spent more time considering how we name our versions, and have chosen to become more strict in our adherence of "SemVer", or "Semantic Versioning", the standard used in haxelib and many other package management systems.

Semantic Versioning 2.0.0 dictates that backward-incompatible changes must be a major version release, and that added features require a new minor version release.

The version releases for OpenFL may not look very different in the future, but Lime releases will begin to change a lot. Yesterday Lime 3.6.1 was released. There were minor (patch-level) changes, but we added streaming audio support. According to SemVer, this should have been 3.7.0 due to the added feature. Another example is our 3.5 release of Lime. The former `lime.net.HTTPRequest` API was dramatically rewritten for much better (unified) support of network requests. Under SemVer, this would have been a major version, or Lime 4.

Since OpenFL 4.4, we added an error that occurs if OpenFL is not matched with a compatible version of Lime. Even though Lime versions may begin to increment more quickly than in the past, this version check will help make it clear which version of Lime an OpenFL release expects.

If you are upgrading, and do have trouble, please contact the team at the OpenFL forums, or join the OpenFL Slack chat, and lets talk about it. The OpenFL samples have hardly changed since they were first created, and our tests only become more strict. If there are regressions for you, they are probably not intentional. Please be calm, let us know, and let us move forward together.
