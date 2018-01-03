OpenFL.org
==========

This is the source for http://www.openfl.org.

You can build the site using [Jekyll](http://www.jekyllrb.com). It should work in a Unix environment, either from Linux, macOS or the Ubuntu Bash Shell for Windows. Make sure that Ruby is installed, and install Bundler (`gem install bundler`), then run the following in the openfl.org directory:

	bundle install
	jekyll serve

If you wish to add a title to the showcase, each title has it's own file under "\_showcase". Each showcase item references an image name, which is expected to be located under "images/large" and "images/small" with the same name. In order to allow clients, developers and publishers to have links, the "\_data" folder has files to match each name with a matching URL.

Thanks for using OpenFL!