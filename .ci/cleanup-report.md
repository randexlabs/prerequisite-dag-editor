# Repository cleanup report

Commit: `038864cf9c88344054ebe24fec935045f2574fe1`

## Install Linux dependencies

```text
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
Hit:6 https://packages.microsoft.com/repos/azure-cli noble InRelease
Hit:2 http://azure.archive.ubuntu.com/ubuntu noble InRelease
Get:7 https://packages.microsoft.com/ubuntu/24.04/prod noble InRelease [3600 B]
Get:3 http://azure.archive.ubuntu.com/ubuntu noble-updates InRelease [126 kB]
Get:4 http://azure.archive.ubuntu.com/ubuntu noble-backports InRelease [126 kB]
Get:5 http://azure.archive.ubuntu.com/ubuntu noble-security InRelease [126 kB]
Get:8 https://dl.google.com/linux/chrome-stable/deb stable InRelease [2548 B]
Get:9 https://packages.microsoft.com/ubuntu/24.04/prod noble/main arm64 Packages [204 kB]
Get:10 https://packages.microsoft.com/ubuntu/24.04/prod noble/main amd64 Packages [237 kB]
Get:11 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 Packages [1141 kB]
Get:12 http://azure.archive.ubuntu.com/ubuntu noble-updates/main Translation-en [276 kB]
Get:13 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 Components [181 kB]
Get:14 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Packages [1676 kB]
Get:15 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe Translation-en [333 kB]
Get:16 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 Components [388 kB]
Get:17 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted amd64 Packages [1348 kB]
Get:18 http://azure.archive.ubuntu.com/ubuntu noble-updates/restricted Translation-en [302 kB]
Get:19 http://azure.archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Packages [45.4 kB]
Get:20 http://azure.archive.ubuntu.com/ubuntu noble-updates/multiverse Translation-en [12.1 kB]
Get:21 http://azure.archive.ubuntu.com/ubuntu noble-updates/multiverse amd64 Components [940 B]
Get:22 http://azure.archive.ubuntu.com/ubuntu noble-backports/main amd64 Components [5784 B]
Get:23 http://azure.archive.ubuntu.com/ubuntu noble-backports/universe amd64 Packages [32.5 kB]
Get:24 http://azure.archive.ubuntu.com/ubuntu noble-backports/universe amd64 Components [12.6 kB]
Get:25 http://azure.archive.ubuntu.com/ubuntu noble-security/main amd64 Packages [881 kB]
Get:26 http://azure.archive.ubuntu.com/ubuntu noble-security/main Translation-en [196 kB]
Get:27 http://azure.archive.ubuntu.com/ubuntu noble-security/main amd64 Components [46.3 kB]
Get:28 http://azure.archive.ubuntu.com/ubuntu noble-security/universe amd64 Packages [1197 kB]
Get:29 http://azure.archive.ubuntu.com/ubuntu noble-security/universe Translation-en [238 kB]
Get:30 http://azure.archive.ubuntu.com/ubuntu noble-security/universe amd64 Components [76.3 kB]
Get:31 http://azure.archive.ubuntu.com/ubuntu noble-security/restricted amd64 Packages [1240 kB]
Get:32 http://azure.archive.ubuntu.com/ubuntu noble-security/restricted Translation-en [281 kB]
Get:33 http://azure.archive.ubuntu.com/ubuntu noble-security/multiverse amd64 Packages [40.3 kB]
Get:34 http://azure.archive.ubuntu.com/ubuntu noble-security/multiverse Translation-en [10.4 kB]
Get:35 https://dl.google.com/linux/chrome-stable/deb stable/main amd64 Packages [1424 B]
Fetched 10.8 MB in 1s (10.0 MB/s)
Reading package lists...
Reading package lists...
Building dependency tree...
Reading state information...
libssl-dev is already the newest version (3.0.13-0ubuntu3.11).
patchelf is already the newest version (0.18.0-1.1build1).
The following additional packages will be installed:
  bubblewrap gir1.2-atk-1.0 gir1.2-atspi-2.0 gir1.2-ayatanaappindicator3-0.1
  gir1.2-ayatanaido3-0.4 gir1.2-dbusmenu-glib-0.4 gir1.2-freedesktop
  gir1.2-freedesktop-dev gir1.2-gdkpixbuf-2.0 gir1.2-girepository-2.0-dev
  gir1.2-glib-2.0-dev gir1.2-gtk-3.0 gir1.2-harfbuzz-0.0
  gir1.2-javascriptcoregtk-4.1 gir1.2-pango-1.0 gir1.2-rsvg-2.0
  gir1.2-soup-3.0 gir1.2-webkit2-4.1 glib-networking glib-networking-common
  glib-networking-services gobject-introspection gobject-introspection-bin
  gsettings-desktop-schemas gstreamer1.0-plugins-base
  gstreamer1.0-plugins-good libaa1 libasyncns0 libatk-bridge2.0-dev
  libatk1.0-dev libatspi2.0-dev libavc1394-0 libayatana-appindicator3-1
  libayatana-ido3-0.4-0 libayatana-ido3-dev libayatana-indicator3-7
  libayatana-indicator3-dev libblkid-dev libbrotli-dev libbz2-dev libcaca0
  libcairo-script-interpreter2 libcairo2-dev libcdparanoia0 libdatrie-dev
  libdbus-1-dev libdbusmenu-glib-dev libdeflate-dev libdv4t64 libegl-dev
  libegl-mesa0 libegl1 libegl1-mesa-dev libepoxy-dev libflac12t64
  libfontconfig-dev libfreetype-dev libfribidi-dev libgdk-pixbuf-2.0-dev
  libgdk-pixbuf2.0-bin libgirepository-1.0-dev libgirepository-2.0-0
  libgirepository1.0-dev libgl-dev libgles-dev libgles1 libgles2
  libglib2.0-dev libglib2.0-dev-bin libglvnd-core-dev libglvnd-dev libglx-dev
  libgraphite2-dev libgstreamer-gl1.0-0 libgstreamer-plugins-base1.0-0
  libgstreamer-plugins-good1.0-0 libharfbuzz-cairo0 libharfbuzz-dev
  libharfbuzz-gobject0 libharfbuzz-icu0 libharfbuzz-subset0 libhyphen0
  libice-dev libiec61883-0 libjavascriptcoregtk-4.1-0
  libjavascriptcoregtk-4.1-dev libjbig-dev libjpeg-dev libjpeg-turbo8-dev
  libjpeg8-dev liblerc-dev liblzma-dev libmanette-0.2-0 libmount-dev
  libmp3lame0 libmpg123-0t64 libnghttp2-dev libopengl-dev libopengl0 libopus0
  liborc-0.4-0t64 libpango1.0-dev libpangoxft-1.0-0 libpixman-1-dev libpng-dev
  libproxy1v5 libpsl-dev libpthread-stubs0-dev libpulse0 libraw1394-11
  librsvg2-2 librsvg2-common libsecret-1-0 libsecret-common libselinux1-dev
  libsepol-dev libsharpyuv-dev libshout3 libsm-dev libsndfile1 libsoup-3.0-0
  libsoup-3.0-common libsoup-3.0-dev libspeex1 libsysprof-capture-4-dev
  libtag1v5 libtag1v5-vanilla libthai-dev libtheora0 libtiff-dev libtiffxx6
  libtwolame0 libv4l-0t64 libv4lconvert0t64 libvisual-0.4-0 libvorbisenc2
  libvpx9 libwavpack1 libwayland-bin libwayland-dev libwayland-server0
  libwebkit2gtk-4.1-0 libwebp-dev libwebpdecoder3 libx11-dev libxau-dev
  libxcb-render0-dev libxcb-shm0-dev libxcb1-dev libxcomposite-dev
  libxcursor-dev libxdamage-dev libxdmcp-dev libxext-dev libxfixes-dev
  libxft-dev libxi-dev libxinerama-dev libxkbcommon-dev libxrandr-dev
  libxrender-dev libxtst-dev pango1.0-tools python3-mako python3-markdown
  session-migration uuid-dev wayland-protocols x11proto-dev xdg-dbus-proxy
  xorg-sgml-doctools xtrans-dev
Suggested packages:
  gvfs libcairo2-doc libdatrie-doc libdv-bin oss-compat freetype2-doc
  libgirepository1.0-doc libglib2.0-doc libxml2-utils libgraphite2-utils
  libvisual-0.4-plugins libgtk-3-doc libice-doc liblzma-doc libnghttp2-doc
  opus-tools libpango1.0-doc pulseaudio libraw1394-doc librsvg2-bin
  librsvg2-doc libsm-doc libsoup-3.0-doc speex libthai-doc libwayland-doc
  gstreamer1.0-libav gstreamer1.0-plugins-bad gstreamer1.0-alsa libx11-doc
  libxcb-doc libxext-doc graphicsmagick python-mako-doc python3-beaker
  python-markdown-doc
Recommended packages:
  gstreamer1.0-x bzip2-doc gstreamer1.0-gl libpng-tools xdg-desktop-portal-gtk
The following NEW packages will be installed:
  bubblewrap build-essential gir1.2-atk-1.0 gir1.2-atspi-2.0
  gir1.2-ayatanaappindicator3-0.1 gir1.2-ayatanaido3-0.4
  gir1.2-dbusmenu-glib-0.4 gir1.2-freedesktop gir1.2-freedesktop-dev
  gir1.2-gdkpixbuf-2.0 gir1.2-girepository-2.0-dev gir1.2-glib-2.0-dev
  gir1.2-gtk-3.0 gir1.2-harfbuzz-0.0 gir1.2-javascriptcoregtk-4.1
  gir1.2-pango-1.0 gir1.2-rsvg-2.0 gir1.2-soup-3.0 gir1.2-webkit2-4.1
  glib-networking glib-networking-common glib-networking-services
  gobject-introspection gobject-introspection-bin gsettings-desktop-schemas
  gstreamer1.0-plugins-base gstreamer1.0-plugins-good libaa1 libasyncns0
  libatk-bridge2.0-dev libatk1.0-dev libatspi2.0-dev libavc1394-0
  libayatana-appindicator3-1 libayatana-appindicator3-dev
  libayatana-ido3-0.4-0 libayatana-ido3-dev libayatana-indicator3-7
  libayatana-indicator3-dev libblkid-dev libbrotli-dev libbz2-dev libcaca0
  libcairo-script-interpreter2 libcairo2-dev libcdparanoia0 libdatrie-dev
  libdbus-1-dev libdbusmenu-glib-dev libdeflate-dev libdv4t64 libegl-dev
  libegl-mesa0 libegl1 libegl1-mesa-dev libepoxy-dev libflac12t64
  libfontconfig-dev libfreetype-dev libfribidi-dev libgdk-pixbuf-2.0-dev
  libgdk-pixbuf2.0-bin libgirepository-1.0-dev libgirepository-2.0-0
  libgirepository1.0-dev libgl-dev libgles-dev libgles1 libgles2
  libglib2.0-dev libglib2.0-dev-bin libglvnd-core-dev libglvnd-dev libglx-dev
  libgraphite2-dev libgstreamer-gl1.0-0 libgstreamer-plugins-base1.0-0
  libgstreamer-plugins-good1.0-0 libgtk-3-dev libharfbuzz-cairo0
  libharfbuzz-dev libharfbuzz-gobject0 libharfbuzz-icu0 libharfbuzz-subset0
  libhyphen0 libice-dev libiec61883-0 libjavascriptcoregtk-4.1-0
  libjavascriptcoregtk-4.1-dev libjbig-dev libjpeg-dev libjpeg-turbo8-dev
  libjpeg8-dev liblerc-dev liblzma-dev libmanette-0.2-0 libmount-dev
  libmp3lame0 libmpg123-0t64 libnghttp2-dev libopengl-dev libopengl0 libopus0
  liborc-0.4-0t64 libpango1.0-dev libpangoxft-1.0-0 libpixman-1-dev libpng-dev
  libproxy1v5 libpsl-dev libpthread-stubs0-dev libpulse0 libraw1394-11
  librsvg2-2 librsvg2-common librsvg2-dev libsecret-1-0 libsecret-common
  libselinux1-dev libsepol-dev libsharpyuv-dev libshout3 libsm-dev libsndfile1
  libsoup-3.0-0 libsoup-3.0-common libsoup-3.0-dev libspeex1
  libsysprof-capture-4-dev libtag1v5 libtag1v5-vanilla libthai-dev libtheora0
  libtiff-dev libtiffxx6 libtwolame0 libv4l-0t64 libv4lconvert0t64
  libvisual-0.4-0 libvorbisenc2 libvpx9 libwavpack1 libwayland-bin
  libwayland-dev libwayland-server0 libwebkit2gtk-4.1-0 libwebkit2gtk-4.1-dev
  libwebp-dev libwebpdecoder3 libx11-dev libxau-dev libxcb-render0-dev
  libxcb-shm0-dev libxcb1-dev libxcomposite-dev libxcursor-dev libxdamage-dev
  libxdmcp-dev libxext-dev libxfixes-dev libxft-dev libxi-dev libxinerama-dev
  libxkbcommon-dev libxrandr-dev libxrender-dev libxtst-dev pango1.0-tools
  python3-mako python3-markdown session-migration uuid-dev wayland-protocols
  x11proto-dev xdg-dbus-proxy xorg-sgml-doctools xtrans-dev
0 upgraded, 177 newly installed, 0 to remove and 66 not upgraded.
Need to get 59.1 MB of archives.
After this operation, 259 MB of additional disk space will be used.
Get:1 file:/etc/apt/apt-mirrors.txt Mirrorlist [144 B]
Get:2 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 bubblewrap amd64 0.9.0-1ubuntu0.1 [50.2 kB]
Get:3 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 build-essential amd64 12.10ubuntu1 [4928 B]
Get:4 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-atk-1.0 amd64 2.52.0-1build1 [23.1 kB]
Get:5 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-freedesktop amd64 1.80.1-1 [49.7 kB]
Get:6 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-atspi-2.0 amd64 2.52.0-1build1 [19.8 kB]
Get:7 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gir1.2-gdkpixbuf-2.0 amd64 2.42.10+dfsg-3ubuntu3.3 [9482 B]
Get:8 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libharfbuzz-gobject0 amd64 8.3.0-2build2 [34.3 kB]
Get:9 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-harfbuzz-0.0 amd64 8.3.0-2build2 [44.5 kB]
Get:10 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libpangoxft-1.0-0 amd64 1.52.1+ds-1build1 [20.3 kB]
Get:11 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-pango-1.0 amd64 1.52.1+ds-1build1 [34.8 kB]
Get:12 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gir1.2-gtk-3.0 amd64 3.24.41-4ubuntu1.3 [245 kB]
Get:13 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libayatana-ido3-0.4-0 amd64 0.10.1-1build2 [56.6 kB]
Get:14 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libayatana-indicator3-7 amd64 0.9.4-1build1 [31.7 kB]
Get:15 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libayatana-appindicator3-1 amd64 0.5.93-1build3 [24.7 kB]
Get:16 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-ayatanaappindicator3-0.1 amd64 0.5.93-1build3 [5838 B]
Get:17 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-ayatanaido3-0.4 amd64 0.10.1-1build2 [6410 B]
Get:18 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-dbusmenu-glib-0.4 amd64 18.10.20180917~bzr492+repack1-3.1ubuntu5 [7088 B]
Get:19 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gir1.2-glib-2.0-dev amd64 2.80.0-6ubuntu3.8 [848 kB]
Get:20 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-freedesktop-dev amd64 1.80.1-1 [28.8 kB]
Get:21 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-girepository-2.0-dev amd64 1.80.1-1 [41.5 kB]
Get:22 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libjavascriptcoregtk-4.1-0 amd64 2.52.3-0ubuntu0.24.04.1 [8141 kB]
Get:23 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gir1.2-javascriptcoregtk-4.1 amd64 2.52.3-0ubuntu0.24.04.1 [38.6 kB]
Get:24 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 librsvg2-2 amd64 2.58.0+dfsg-1build1 [2135 kB]
Get:25 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gir1.2-rsvg-2.0 amd64 2.58.0+dfsg-1build1 [11.1 kB]
Get:26 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libproxy1v5 amd64 0.5.4-4build1 [26.5 kB]
Get:27 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 glib-networking-common all 2.80.0-1build1 [6702 B]
Get:28 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 glib-networking-services amd64 2.80.0-1build1 [12.8 kB]
Get:29 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 session-migration amd64 0.3.9build1 [9034 B]
Get:30 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gsettings-desktop-schemas all 46.1-0ubuntu1 [35.6 kB]
Get:31 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 glib-networking amd64 2.80.0-1build1 [64.1 kB]
Get:32 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libsoup-3.0-common all 3.4.4-5ubuntu0.7 [11.6 kB]
Get:33 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libsoup-3.0-0 amd64 3.4.4-5ubuntu0.7 [292 kB]
Get:34 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gir1.2-soup-3.0 amd64 3.4.4-5ubuntu0.7 [22.5 kB]
Get:35 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libcdparanoia0 amd64 3.10.2+debian-14build3 [48.5 kB]
Get:36 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 liborc-0.4-0t64 amd64 1:0.4.38-1ubuntu0.1 [207 kB]
Get:37 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgstreamer-plugins-base1.0-0 amd64 1.24.2-1ubuntu0.4 [862 kB]
Get:38 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libopus0 amd64 1.4-1build1 [208 kB]
Get:39 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libtheora0 amd64 1.1.1+dfsg.1-16.1build3 [211 kB]
Get:40 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libvisual-0.4-0 amd64 0.4.2-2build1 [115 kB]
Get:41 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libvorbisenc2 amd64 1.3.7-1build3 [80.8 kB]
Get:42 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gstreamer1.0-plugins-base amd64 1.24.2-1ubuntu0.4 [721 kB]
Get:43 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libaa1 amd64 1.4p5-51.1 [49.9 kB]
Get:44 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libraw1394-11 amd64 2.1.2-2build3 [26.2 kB]
Get:45 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libavc1394-0 amd64 0.5.4-5build3 [15.4 kB]
Get:46 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libcaca0 amd64 0.99.beta20-4ubuntu0.2 [209 kB]
Get:47 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libdv4t64 amd64 1.0.0-17.1build1 [63.2 kB]
Get:48 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libflac12t64 amd64 1.4.3+ds-2.1ubuntu2 [197 kB]
Get:49 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgstreamer-plugins-good1.0-0 amd64 1.24.2-1ubuntu1.5 [33.5 kB]
Get:50 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libiec61883-0 amd64 1.2.0-6build1 [24.5 kB]
Get:51 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libmp3lame0 amd64 3.100-6build1 [142 kB]
Get:52 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libmpg123-0t64 amd64 1.32.5-1ubuntu1.1 [169 kB]
Get:53 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libasyncns0 amd64 0.8-6build4 [11.3 kB]
Get:54 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libsndfile1 amd64 1.2.2-1ubuntu5.24.04.1 [209 kB]
Get:55 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libpulse0 amd64 1:16.1+dfsg1-2ubuntu10.1 [292 kB]
Get:56 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libspeex1 amd64 1.2.1-2ubuntu2.24.04.1 [59.6 kB]
Get:57 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libshout3 amd64 2.4.6-1build2 [50.3 kB]
Get:58 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libtag1v5-vanilla amd64 1.13.1-1build1 [326 kB]
Get:59 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libtag1v5 amd64 1.13.1-1build1 [11.7 kB]
Get:60 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libtwolame0 amd64 0.4.0-2build3 [52.3 kB]
Get:61 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libv4lconvert0t64 amd64 1.26.1-4build3 [87.6 kB]
Get:62 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libv4l-0t64 amd64 1.26.1-4build3 [46.9 kB]
Get:63 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libvpx9 amd64 1.14.0-1ubuntu2.3 [1143 kB]
Get:64 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libwavpack1 amd64 5.6.0-1build1 [84.6 kB]
Get:65 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gstreamer1.0-plugins-good amd64 1.24.2-1ubuntu1.5 [2236 kB]
Get:66 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libgles2 amd64 1.7.0-1build1 [17.1 kB]
Get:67 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 xdg-dbus-proxy amd64 0.1.5-1ubuntu0.2 [26.4 kB]
Get:68 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libegl-mesa0 amd64 25.2.8-0ubuntu0.24.04.2 [117 kB]
Get:69 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libegl1 amd64 1.7.0-1build1 [28.7 kB]
Get:70 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgstreamer-gl1.0-0 amd64 1.24.2-1ubuntu0.4 [214 kB]
Get:71 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libharfbuzz-icu0 amd64 8.3.0-2build2 [13.3 kB]
Get:72 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libhyphen0 amd64 2.8.8-7build3 [26.5 kB]
Get:73 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libmanette-0.2-0 amd64 0.2.7-1build2 [30.6 kB]
Get:74 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libsecret-common all 0.21.4-1build3 [4962 B]
Get:75 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libsecret-1-0 amd64 0.21.4-1build3 [116 kB]
Get:76 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libwayland-server0 amd64 1.22.0-2.1build1 [33.9 kB]
Get:77 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libwebkit2gtk-4.1-0 amd64 2.52.3-0ubuntu0.24.04.1 [25.1 MB]
Get:78 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 gir1.2-webkit2-4.1 amd64 2.52.3-0ubuntu0.24.04.1 [105 kB]
Get:79 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 python3-mako all 1.3.2-1ubuntu0.1 [63.4 kB]
Get:80 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 python3-markdown all 3.5.2-1 [72.0 kB]
Get:81 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gobject-introspection-bin amd64 1.80.1-1 [254 kB]
Get:82 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libglib2.0-dev-bin amd64 2.80.0-6ubuntu3.8 [138 kB]
Get:83 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 uuid-dev amd64 2.39.3-9ubuntu6.5 [33.5 kB]
Get:84 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libblkid-dev amd64 2.39.3-9ubuntu6.5 [204 kB]
Get:85 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libsepol-dev amd64 3.5-2build1 [384 kB]
Get:86 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libselinux1-dev amd64 3.5-2ubuntu2.1 [164 kB]
Get:87 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libmount-dev amd64 2.39.3-9ubuntu6.5 [14.9 kB]
Get:88 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgirepository-2.0-0 amd64 2.80.0-6ubuntu3.8 [73.6 kB]
Get:89 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libglib2.0-dev amd64 2.80.0-6ubuntu3.8 [1860 kB]
Get:90 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 gobject-introspection amd64 1.80.1-1 [105 kB]
Get:91 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libatk1.0-dev amd64 2.52.0-1build1 [100 kB]
Get:92 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libdbus-1-dev amd64 1.14.10-4ubuntu4.1 [190 kB]
Get:93 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 xorg-sgml-doctools all 1:1.11-1.1 [10.9 kB]
Get:94 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 x11proto-dev all 2023.2-1 [602 kB]
Get:95 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxau-dev amd64 1:1.0.9-1build6 [9570 B]
Get:96 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxdmcp-dev amd64 1:1.1.3-0ubuntu6 [26.5 kB]
Get:97 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 xtrans-dev all 1.4.0-1 [68.9 kB]
Get:98 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libpthread-stubs0-dev amd64 0.4-1build3 [4746 B]
Get:99 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxcb1-dev amd64 1.15-1ubuntu2 [85.8 kB]
Get:100 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libx11-dev amd64 2:1.8.7-1build1 [732 kB]
Get:101 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxext-dev amd64 2:1.3.4-1build2 [83.5 kB]
Get:102 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxfixes-dev amd64 1:6.0.0-2build1 [12.1 kB]
Get:103 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxi-dev amd64 2:1.8.1-1build1 [194 kB]
Get:104 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxtst-dev amd64 2:1.2.3-1.1build1 [15.9 kB]
Get:105 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libatspi2.0-dev amd64 2.52.0-1build1 [76.2 kB]
Get:106 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libatk-bridge2.0-dev amd64 2.52.0-1build1 [4284 B]
Get:107 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libcairo-script-interpreter2 amd64 1.18.0-3build1 [60.3 kB]
Get:108 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libbrotli-dev amd64 1.1.0-2build2 [353 kB]
Get:109 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libbz2-dev amd64 1.0.8-5.1build0.1 [33.6 kB]
Get:110 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libpng-dev amd64 1.6.43-5ubuntu0.6 [265 kB]
Get:111 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libfreetype-dev amd64 2.13.2+dfsg-1ubuntu0.1 [575 kB]
Get:112 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libfontconfig-dev amd64 2.15.0-1.1ubuntu2 [161 kB]
Get:113 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libpixman-1-dev amd64 0.42.2-1build1 [296 kB]
Get:114 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libice-dev amd64 2:1.0.10-1build3 [51.0 kB]
Get:115 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libsm-dev amd64 2:1.2.3-1build3 [17.8 kB]
Get:116 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxcb-render0-dev amd64 1.15-1ubuntu2 [19.6 kB]
Get:117 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxcb-shm0-dev amd64 1.15-1ubuntu2 [8246 B]
Get:118 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxrender-dev amd64 1:0.9.10-1.1build1 [26.3 kB]
Get:119 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libcairo2-dev amd64 1.18.0-3build1 [41.1 kB]
Get:120 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libglx-dev amd64 1.7.0-1build1 [14.2 kB]
Get:121 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libgl-dev amd64 1.7.0-1build1 [102 kB]
Get:122 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libegl-dev amd64 1.7.0-1build1 [18.2 kB]
Get:123 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libglvnd-core-dev amd64 1.7.0-1build1 [13.6 kB]
Get:124 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libgles1 amd64 1.7.0-1build1 [11.6 kB]
Get:125 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libgles-dev amd64 1.7.0-1build1 [50.5 kB]
Get:126 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libopengl0 amd64 1.7.0-1build1 [32.8 kB]
Get:127 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libopengl-dev amd64 1.7.0-1build1 [3454 B]
Get:128 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libglvnd-dev amd64 1.7.0-1build1 [3198 B]
Get:129 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libegl1-mesa-dev amd64 25.2.8-0ubuntu0.24.04.2 [26.7 kB]
Get:130 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libepoxy-dev amd64 1.5.10-1build1 [132 kB]
Get:131 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libfribidi-dev amd64 1.0.13-3build1 [64.8 kB]
Get:132 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgdk-pixbuf2.0-bin amd64 2.42.10+dfsg-3ubuntu3.3 [13.9 kB]
Get:133 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libjpeg-turbo8-dev amd64 2.1.5-2ubuntu2 [295 kB]
Get:134 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libjpeg8-dev amd64 8c-2ubuntu11 [1484 B]
Get:135 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libjpeg-dev amd64 8c-2ubuntu11 [1482 B]
Get:136 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libjbig-dev amd64 2.1-6.1ubuntu2 [27.9 kB]
Get:137 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 liblzma-dev amd64 5.6.1+really5.4.5-1ubuntu0.3 [176 kB]
Get:138 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libwebpdecoder3 amd64 1.3.2-0.4build3 [114 kB]
Get:139 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libsharpyuv-dev amd64 1.3.2-0.4build3 [16.0 kB]
Get:140 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libwebp-dev amd64 1.3.2-0.4build3 [367 kB]
Get:141 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libtiffxx6 amd64 4.5.1+git230720-4ubuntu2.5 [5642 B]
Get:142 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libdeflate-dev amd64 1.19-1build1.1 [50.9 kB]
Get:143 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 liblerc-dev amd64 4.0.0+ds-4ubuntu2 [182 kB]
Get:144 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libtiff-dev amd64 4.5.1+git230720-4ubuntu2.5 [338 kB]
Get:145 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgdk-pixbuf-2.0-dev amd64 2.42.10+dfsg-3ubuntu3.3 [47.9 kB]
Get:146 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libharfbuzz-subset0 amd64 8.3.0-2build2 [448 kB]
Get:147 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libharfbuzz-cairo0 amd64 8.3.0-2build2 [26.2 kB]
Get:148 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgraphite2-dev amd64 1.3.14-2ubuntu0.24.04.1 [14.7 kB]
Get:149 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libharfbuzz-dev amd64 8.3.0-2build2 [142 kB]
Get:150 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libdatrie-dev amd64 0.2.13-3build1 [19.4 kB]
Get:151 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libthai-dev amd64 0.1.29-2build1 [26.6 kB]
Get:152 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxft-dev amd64 2.3.6-1build1 [64.3 kB]
Get:153 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 pango1.0-tools amd64 1.52.1+ds-1build1 [36.7 kB]
Get:154 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libpango1.0-dev amd64 1.52.1+ds-1build1 [147 kB]
Get:155 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libwayland-bin amd64 1.22.0-2.1build1 [20.6 kB]
Get:156 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libwayland-dev amd64 1.22.0-2.1build1 [71.3 kB]
Get:157 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxcomposite-dev amd64 1:0.4.5-1build3 [9374 B]
Get:158 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxcursor-dev amd64 1:1.2.1-1build1 [31.8 kB]
Get:159 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxdamage-dev amd64 1:1.1.6-1build1 [5270 B]
Get:160 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxinerama-dev amd64 2:1.1.4-3build1 [7988 B]
Get:161 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxkbcommon-dev amd64 1.6.0-1build1 [56.3 kB]
Get:162 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libxrandr-dev amd64 2:1.5.2-2build1 [26.4 kB]
Get:163 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 wayland-protocols all 1.45-1~ubuntu0.24.04.2 [114 kB]
Get:164 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libgtk-3-dev amd64 3.24.41-4ubuntu1.3 [1096 kB]
Get:165 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libayatana-ido3-dev amd64 0.10.1-1build2 [14.2 kB]
Get:166 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libayatana-indicator3-dev amd64 0.9.4-1build1 [6956 B]
Get:167 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libdbusmenu-glib-dev amd64 18.10.20180917~bzr492+repack1-3.1ubuntu5 [70.6 kB]
Get:168 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libayatana-appindicator3-dev amd64 0.5.93-1build3 [14.9 kB]
Get:169 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libgirepository-1.0-dev amd64 1.80.1-1 [28.5 kB]
Get:170 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libgirepository1.0-dev amd64 1.80.1-1 [17.0 kB]
Get:171 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 libjavascriptcoregtk-4.1-dev amd64 2.52.3-0ubuntu0.24.04.1 [69.8 kB]
Get:172 http://azure.archive.ubuntu.com/ubuntu noble-updates/main amd64 libnghttp2-dev amd64 1.59.0-1ubuntu0.4 [117 kB]
Get:173 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 libpsl-dev amd64 0.21.2-1.1build1 [76.4 kB]
Get:174 http://azure.archive.ubuntu.com/ubuntu noble/main amd64 librsvg2-common amd64 2.58.0+dfsg-1build1 [11.8 kB]
Get:175 http://azure.archive.ubuntu.com/ubuntu noble/universe amd64 librsvg2-dev amd64 2.58.0+dfsg-1build1 [38.0 kB]
Get:176 http://azure.archive.ubuntu.com/ubuntu noble/universe amd64 libsysprof-capture-4-dev amd64 46.0-1build1 [51.0 kB]
Get:177 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 libsoup-3.0-dev amd64 3.4.4-5ubuntu0.7 [105 kB]
Get:178 http://azure.archive.ubuntu.com/ubuntu noble-updates/universe amd64 libwebkit2gtk-4.1-dev amd64 2.52.3-0ubuntu0.24.04.1 [290 kB]
Fetched 59.1 MB in 18s (3259 kB/s)
Selecting previously unselected package bubblewrap.
(Reading database ...
(Reading database ... 5%
(Reading database ... 10%
(Reading database ... 15%
(Reading database ... 20%
(Reading database ... 25%
(Reading database ... 30%
(Reading database ... 35%
(Reading database ... 40%
(Reading database ... 45%
(Reading database ... 50%
(Reading database ... 55%
(Reading database ... 60%
(Reading database ... 65%
(Reading database ... 70%
(Reading database ... 75%
(Reading database ... 80%
(Reading database ... 85%
(Reading database ... 90%
(Reading database ... 95%
(Reading database ... 100%
(Reading database ... 202954 files and directories currently installed.)
Preparing to unpack .../000-bubblewrap_0.9.0-1ubuntu0.1_amd64.deb ...
Unpacking bubblewrap (0.9.0-1ubuntu0.1) ...
Selecting previously unselected package build-essential.
Preparing to unpack .../001-build-essential_12.10ubuntu1_amd64.deb ...
Unpacking build-essential (12.10ubuntu1) ...
Selecting previously unselected package gir1.2-atk-1.0:amd64.
Preparing to unpack .../002-gir1.2-atk-1.0_2.52.0-1build1_amd64.deb ...
Unpacking gir1.2-atk-1.0:amd64 (2.52.0-1build1) ...
Selecting previously unselected package gir1.2-freedesktop:amd64.
Preparing to unpack .../003-gir1.2-freedesktop_1.80.1-1_amd64.deb ...
Unpacking gir1.2-freedesktop:amd64 (1.80.1-1) ...
Selecting previously unselected package gir1.2-atspi-2.0:amd64.
Preparing to unpack .../004-gir1.2-atspi-2.0_2.52.0-1build1_amd64.deb ...
Unpacking gir1.2-atspi-2.0:amd64 (2.52.0-1build1) ...
Selecting previously unselected package gir1.2-gdkpixbuf-2.0:amd64.
Preparing to unpack .../005-gir1.2-gdkpixbuf-2.0_2.42.10+dfsg-3ubuntu3.3_amd64.deb ...
Unpacking gir1.2-gdkpixbuf-2.0:amd64 (2.42.10+dfsg-3ubuntu3.3) ...
Selecting previously unselected package libharfbuzz-gobject0:amd64.
Preparing to unpack .../006-libharfbuzz-gobject0_8.3.0-2build2_amd64.deb ...
Unpacking libharfbuzz-gobject0:amd64 (8.3.0-2build2) ...
Selecting previously unselected package gir1.2-harfbuzz-0.0:amd64.
Preparing to unpack .../007-gir1.2-harfbuzz-0.0_8.3.0-2build2_amd64.deb ...
Unpacking gir1.2-harfbuzz-0.0:amd64 (8.3.0-2build2) ...
Selecting previously unselected package libpangoxft-1.0-0:amd64.
Preparing to unpack .../008-libpangoxft-1.0-0_1.52.1+ds-1build1_amd64.deb ...
Unpacking libpangoxft-1.0-0:amd64 (1.52.1+ds-1build1) ...
Selecting previously unselected package gir1.2-pango-1.0:amd64.
Preparing to unpack .../009-gir1.2-pango-1.0_1.52.1+ds-1build1_amd64.deb ...
Unpacking gir1.2-pango-1.0:amd64 (1.52.1+ds-1build1) ...
Selecting previously unselected package gir1.2-gtk-3.0:amd64.
Preparing to unpack .../010-gir1.2-gtk-3.0_3.24.41-4ubuntu1.3_amd64.deb ...
Unpacking gir1.2-gtk-3.0:amd64 (3.24.41-4ubuntu1.3) ...
Selecting previously unselected package libayatana-ido3-0.4-0:amd64.
Preparing to unpack .../011-libayatana-ido3-0.4-0_0.10.1-1build2_amd64.deb ...
Unpacking libayatana-ido3-0.4-0:amd64 (0.10.1-1build2) ...
Selecting previously unselected package libayatana-indicator3-7:amd64.
Preparing to unpack .../012-libayatana-indicator3-7_0.9.4-1build1_amd64.deb ...
Unpacking libayatana-indicator3-7:amd64 (0.9.4-1build1) ...
Selecting previously unselected package libayatana-appindicator3-1.
Preparing to unpack .../013-libayatana-appindicator3-1_0.5.93-1build3_amd64.deb ...
Unpacking libayatana-appindicator3-1 (0.5.93-1build3) ...
Selecting previously unselected package gir1.2-ayatanaappindicator3-0.1.
Preparing to unpack .../014-gir1.2-ayatanaappindicator3-0.1_0.5.93-1build3_amd64.deb ...
Unpacking gir1.2-ayatanaappindicator3-0.1 (0.5.93-1build3) ...
Selecting previously unselected package gir1.2-ayatanaido3-0.4:amd64.
Preparing to unpack .../015-gir1.2-ayatanaido3-0.4_0.10.1-1build2_amd64.deb ...
Unpacking gir1.2-ayatanaido3-0.4:amd64 (0.10.1-1build2) ...
Selecting previously unselected package gir1.2-dbusmenu-glib-0.4:amd64.
Preparing to unpack .../016-gir1.2-dbusmenu-glib-0.4_18.10.20180917~bzr492+repack1-3.1ubuntu5_amd64.deb ...
Unpacking gir1.2-dbusmenu-glib-0.4:amd64 (18.10.20180917~bzr492+repack1-3.1ubuntu5) ...
Selecting previously unselected package gir1.2-glib-2.0-dev:amd64.
Preparing to unpack .../017-gir1.2-glib-2.0-dev_2.80.0-6ubuntu3.8_amd64.deb ...
Unpacking gir1.2-glib-2.0-dev:amd64 (2.80.0-6ubuntu3.8) ...
Selecting previously unselected package gir1.2-freedesktop-dev:amd64.
Preparing to unpack .../018-gir1.2-freedesktop-dev_1.80.1-1_amd64.deb ...
Unpacking gir1.2-freedesktop-dev:amd64 (1.80.1-1) ...
Selecting previously unselected package gir1.2-girepository-2.0-dev:amd64.
Preparing to unpack .../019-gir1.2-girepository-2.0-dev_1.80.1-1_amd64.deb ...
Unpacking gir1.2-girepository-2.0-dev:amd64 (1.80.1-1) ...
Selecting previously unselected package libjavascriptcoregtk-4.1-0:amd64.
Preparing to unpack .../020-libjavascriptcoregtk-4.1-0_2.52.3-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libjavascriptcoregtk-4.1-0:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Selecting previously unselected package gir1.2-javascriptcoregtk-4.1:amd64.
Preparing to unpack .../021-gir1.2-javascriptcoregtk-4.1_2.52.3-0ubuntu0.24.04.1_amd64.deb ...
Unpacking gir1.2-javascriptcoregtk-4.1:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Selecting previously unselected package librsvg2-2:amd64.
Preparing to unpack .../022-librsvg2-2_2.58.0+dfsg-1build1_amd64.deb ...
Unpacking librsvg2-2:amd64 (2.58.0+dfsg-1build1) ...
Selecting previously unselected package gir1.2-rsvg-2.0:amd64.
Preparing to unpack .../023-gir1.2-rsvg-2.0_2.58.0+dfsg-1build1_amd64.deb ...
Unpacking gir1.2-rsvg-2.0:amd64 (2.58.0+dfsg-1build1) ...
Selecting previously unselected package libproxy1v5:amd64.
Preparing to unpack .../024-libproxy1v5_0.5.4-4build1_amd64.deb ...
Unpacking libproxy1v5:amd64 (0.5.4-4build1) ...
Selecting previously unselected package glib-networking-common.
Preparing to unpack .../025-glib-networking-common_2.80.0-1build1_all.deb ...
Unpacking glib-networking-common (2.80.0-1build1) ...
Selecting previously unselected package glib-networking-services.
Preparing to unpack .../026-glib-networking-services_2.80.0-1build1_amd64.deb ...
Unpacking glib-networking-services (2.80.0-1build1) ...
Selecting previously unselected package session-migration.
Preparing to unpack .../027-session-migration_0.3.9build1_amd64.deb ...
Unpacking session-migration (0.3.9build1) ...
Selecting previously unselected package gsettings-desktop-schemas.
Preparing to unpack .../028-gsettings-desktop-schemas_46.1-0ubuntu1_all.deb ...
Unpacking gsettings-desktop-schemas (46.1-0ubuntu1) ...
Selecting previously unselected package glib-networking:amd64.
Preparing to unpack .../029-glib-networking_2.80.0-1build1_amd64.deb ...
Unpacking glib-networking:amd64 (2.80.0-1build1) ...
Selecting previously unselected package libsoup-3.0-common.
Preparing to unpack .../030-libsoup-3.0-common_3.4.4-5ubuntu0.7_all.deb ...
Unpacking libsoup-3.0-common (3.4.4-5ubuntu0.7) ...
Selecting previously unselected package libsoup-3.0-0:amd64.
Preparing to unpack .../031-libsoup-3.0-0_3.4.4-5ubuntu0.7_amd64.deb ...
Unpacking libsoup-3.0-0:amd64 (3.4.4-5ubuntu0.7) ...
Selecting previously unselected package gir1.2-soup-3.0:amd64.
Preparing to unpack .../032-gir1.2-soup-3.0_3.4.4-5ubuntu0.7_amd64.deb ...
Unpacking gir1.2-soup-3.0:amd64 (3.4.4-5ubuntu0.7) ...
Selecting previously unselected package libcdparanoia0:amd64.
Preparing to unpack .../033-libcdparanoia0_3.10.2+debian-14build3_amd64.deb ...
Unpacking libcdparanoia0:amd64 (3.10.2+debian-14build3) ...
Selecting previously unselected package liborc-0.4-0t64:amd64.
Preparing to unpack .../034-liborc-0.4-0t64_1%3a0.4.38-1ubuntu0.1_amd64.deb ...
Unpacking liborc-0.4-0t64:amd64 (1:0.4.38-1ubuntu0.1) ...
Selecting previously unselected package libgstreamer-plugins-base1.0-0:amd64.
Preparing to unpack .../035-libgstreamer-plugins-base1.0-0_1.24.2-1ubuntu0.4_amd64.deb ...
Unpacking libgstreamer-plugins-base1.0-0:amd64 (1.24.2-1ubuntu0.4) ...
Selecting previously unselected package libopus0:amd64.
Preparing to unpack .../036-libopus0_1.4-1build1_amd64.deb ...
Unpacking libopus0:amd64 (1.4-1build1) ...
Selecting previously unselected package libtheora0:amd64.
Preparing to unpack .../037-libtheora0_1.1.1+dfsg.1-16.1build3_amd64.deb ...
Unpacking libtheora0:amd64 (1.1.1+dfsg.1-16.1build3) ...
Selecting previously unselected package libvisual-0.4-0:amd64.
Preparing to unpack .../038-libvisual-0.4-0_0.4.2-2build1_amd64.deb ...
Unpacking libvisual-0.4-0:amd64 (0.4.2-2build1) ...
Selecting previously unselected package libvorbisenc2:amd64.
Preparing to unpack .../039-libvorbisenc2_1.3.7-1build3_amd64.deb ...
Unpacking libvorbisenc2:amd64 (1.3.7-1build3) ...
Selecting previously unselected package gstreamer1.0-plugins-base:amd64.
Preparing to unpack .../040-gstreamer1.0-plugins-base_1.24.2-1ubuntu0.4_amd64.deb ...
Unpacking gstreamer1.0-plugins-base:amd64 (1.24.2-1ubuntu0.4) ...
Selecting previously unselected package libaa1:amd64.
Preparing to unpack .../041-libaa1_1.4p5-51.1_amd64.deb ...
Unpacking libaa1:amd64 (1.4p5-51.1) ...
Selecting previously unselected package libraw1394-11:amd64.
Preparing to unpack .../042-libraw1394-11_2.1.2-2build3_amd64.deb ...
Unpacking libraw1394-11:amd64 (2.1.2-2build3) ...
Selecting previously unselected package libavc1394-0:amd64.
Preparing to unpack .../043-libavc1394-0_0.5.4-5build3_amd64.deb ...
Unpacking libavc1394-0:amd64 (0.5.4-5build3) ...
Selecting previously unselected package libcaca0:amd64.
Preparing to unpack .../044-libcaca0_0.99.beta20-4ubuntu0.2_amd64.deb ...
Unpacking libcaca0:amd64 (0.99.beta20-4ubuntu0.2) ...
Selecting previously unselected package libdv4t64:amd64.
Preparing to unpack .../045-libdv4t64_1.0.0-17.1build1_amd64.deb ...
Unpacking libdv4t64:amd64 (1.0.0-17.1build1) ...
Selecting previously unselected package libflac12t64:amd64.
Preparing to unpack .../046-libflac12t64_1.4.3+ds-2.1ubuntu2_amd64.deb ...
Unpacking libflac12t64:amd64 (1.4.3+ds-2.1ubuntu2) ...
Selecting previously unselected package libgstreamer-plugins-good1.0-0:amd64.
Preparing to unpack .../047-libgstreamer-plugins-good1.0-0_1.24.2-1ubuntu1.5_amd64.deb ...
Unpacking libgstreamer-plugins-good1.0-0:amd64 (1.24.2-1ubuntu1.5) ...
Selecting previously unselected package libiec61883-0:amd64.
Preparing to unpack .../048-libiec61883-0_1.2.0-6build1_amd64.deb ...
Unpacking libiec61883-0:amd64 (1.2.0-6build1) ...
Selecting previously unselected package libmp3lame0:amd64.
Preparing to unpack .../049-libmp3lame0_3.100-6build1_amd64.deb ...
Unpacking libmp3lame0:amd64 (3.100-6build1) ...
Selecting previously unselected package libmpg123-0t64:amd64.
Preparing to unpack .../050-libmpg123-0t64_1.32.5-1ubuntu1.1_amd64.deb ...
Unpacking libmpg123-0t64:amd64 (1.32.5-1ubuntu1.1) ...
Selecting previously unselected package libasyncns0:amd64.
Preparing to unpack .../051-libasyncns0_0.8-6build4_amd64.deb ...
Unpacking libasyncns0:amd64 (0.8-6build4) ...
Selecting previously unselected package libsndfile1:amd64.
Preparing to unpack .../052-libsndfile1_1.2.2-1ubuntu5.24.04.1_amd64.deb ...
Unpacking libsndfile1:amd64 (1.2.2-1ubuntu5.24.04.1) ...
Selecting previously unselected package libpulse0:amd64.
Preparing to unpack .../053-libpulse0_1%3a16.1+dfsg1-2ubuntu10.1_amd64.deb ...
Unpacking libpulse0:amd64 (1:16.1+dfsg1-2ubuntu10.1) ...
Selecting previously unselected package libspeex1:amd64.
Preparing to unpack .../054-libspeex1_1.2.1-2ubuntu2.24.04.1_amd64.deb ...
Unpacking libspeex1:amd64 (1.2.1-2ubuntu2.24.04.1) ...
Selecting previously unselected package libshout3:amd64.
Preparing to unpack .../055-libshout3_2.4.6-1build2_amd64.deb ...
Unpacking libshout3:amd64 (2.4.6-1build2) ...
Selecting previously unselected package libtag1v5-vanilla:amd64.
Preparing to unpack .../056-libtag1v5-vanilla_1.13.1-1build1_amd64.deb ...
Unpacking libtag1v5-vanilla:amd64 (1.13.1-1build1) ...
Selecting previously unselected package libtag1v5:amd64.
Preparing to unpack .../057-libtag1v5_1.13.1-1build1_amd64.deb ...
Unpacking libtag1v5:amd64 (1.13.1-1build1) ...
Selecting previously unselected package libtwolame0:amd64.
Preparing to unpack .../058-libtwolame0_0.4.0-2build3_amd64.deb ...
Unpacking libtwolame0:amd64 (0.4.0-2build3) ...
Selecting previously unselected package libv4lconvert0t64:amd64.
Preparing to unpack .../059-libv4lconvert0t64_1.26.1-4build3_amd64.deb ...
Unpacking libv4lconvert0t64:amd64 (1.26.1-4build3) ...
Selecting previously unselected package libv4l-0t64:amd64.
Preparing to unpack .../060-libv4l-0t64_1.26.1-4build3_amd64.deb ...
Unpacking libv4l-0t64:amd64 (1.26.1-4build3) ...
Selecting previously unselected package libvpx9:amd64.
Preparing to unpack .../061-libvpx9_1.14.0-1ubuntu2.3_amd64.deb ...
Unpacking libvpx9:amd64 (1.14.0-1ubuntu2.3) ...
Selecting previously unselected package libwavpack1:amd64.
Preparing to unpack .../062-libwavpack1_5.6.0-1build1_amd64.deb ...
Unpacking libwavpack1:amd64 (5.6.0-1build1) ...
Selecting previously unselected package gstreamer1.0-plugins-good:amd64.
Preparing to unpack .../063-gstreamer1.0-plugins-good_1.24.2-1ubuntu1.5_amd64.deb ...
Unpacking gstreamer1.0-plugins-good:amd64 (1.24.2-1ubuntu1.5) ...
Selecting previously unselected package libgles2:amd64.
Preparing to unpack .../064-libgles2_1.7.0-1build1_amd64.deb ...
Unpacking libgles2:amd64 (1.7.0-1build1) ...
Selecting previously unselected package xdg-dbus-proxy.
Preparing to unpack .../065-xdg-dbus-proxy_0.1.5-1ubuntu0.2_amd64.deb ...
Unpacking xdg-dbus-proxy (0.1.5-1ubuntu0.2) ...
Selecting previously unselected package libegl-mesa0:amd64.
Preparing to unpack .../066-libegl-mesa0_25.2.8-0ubuntu0.24.04.2_amd64.deb ...
Unpacking libegl-mesa0:amd64 (25.2.8-0ubuntu0.24.04.2) ...
Selecting previously unselected package libegl1:amd64.
Preparing to unpack .../067-libegl1_1.7.0-1build1_amd64.deb ...
Unpacking libegl1:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libgstreamer-gl1.0-0:amd64.
Preparing to unpack .../068-libgstreamer-gl1.0-0_1.24.2-1ubuntu0.4_amd64.deb ...
Unpacking libgstreamer-gl1.0-0:amd64 (1.24.2-1ubuntu0.4) ...
Selecting previously unselected package libharfbuzz-icu0:amd64.
Preparing to unpack .../069-libharfbuzz-icu0_8.3.0-2build2_amd64.deb ...
Unpacking libharfbuzz-icu0:amd64 (8.3.0-2build2) ...
Selecting previously unselected package libhyphen0:amd64.
Preparing to unpack .../070-libhyphen0_2.8.8-7build3_amd64.deb ...
Unpacking libhyphen0:amd64 (2.8.8-7build3) ...
Selecting previously unselected package libmanette-0.2-0:amd64.
Preparing to unpack .../071-libmanette-0.2-0_0.2.7-1build2_amd64.deb ...
Unpacking libmanette-0.2-0:amd64 (0.2.7-1build2) ...
Selecting previously unselected package libsecret-common.
Preparing to unpack .../072-libsecret-common_0.21.4-1build3_all.deb ...
Unpacking libsecret-common (0.21.4-1build3) ...
Selecting previously unselected package libsecret-1-0:amd64.
Preparing to unpack .../073-libsecret-1-0_0.21.4-1build3_amd64.deb ...
Unpacking libsecret-1-0:amd64 (0.21.4-1build3) ...
Selecting previously unselected package libwayland-server0:amd64.
Preparing to unpack .../074-libwayland-server0_1.22.0-2.1build1_amd64.deb ...
Unpacking libwayland-server0:amd64 (1.22.0-2.1build1) ...
Selecting previously unselected package libwebkit2gtk-4.1-0:amd64.
Preparing to unpack .../075-libwebkit2gtk-4.1-0_2.52.3-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libwebkit2gtk-4.1-0:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Selecting previously unselected package gir1.2-webkit2-4.1:amd64.
Preparing to unpack .../076-gir1.2-webkit2-4.1_2.52.3-0ubuntu0.24.04.1_amd64.deb ...
Unpacking gir1.2-webkit2-4.1:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Selecting previously unselected package python3-mako.
Preparing to unpack .../077-python3-mako_1.3.2-1ubuntu0.1_all.deb ...
Unpacking python3-mako (1.3.2-1ubuntu0.1) ...
Selecting previously unselected package python3-markdown.
Preparing to unpack .../078-python3-markdown_3.5.2-1_all.deb ...
Unpacking python3-markdown (3.5.2-1) ...
Selecting previously unselected package gobject-introspection-bin.
Preparing to unpack .../079-gobject-introspection-bin_1.80.1-1_amd64.deb ...
Unpacking gobject-introspection-bin (1.80.1-1) ...
Selecting previously unselected package libglib2.0-dev-bin.
Preparing to unpack .../080-libglib2.0-dev-bin_2.80.0-6ubuntu3.8_amd64.deb ...
Unpacking libglib2.0-dev-bin (2.80.0-6ubuntu3.8) ...
Selecting previously unselected package uuid-dev:amd64.
Preparing to unpack .../081-uuid-dev_2.39.3-9ubuntu6.5_amd64.deb ...
Unpacking uuid-dev:amd64 (2.39.3-9ubuntu6.5) ...
Selecting previously unselected package libblkid-dev:amd64.
Preparing to unpack .../082-libblkid-dev_2.39.3-9ubuntu6.5_amd64.deb ...
Unpacking libblkid-dev:amd64 (2.39.3-9ubuntu6.5) ...
Selecting previously unselected package libsepol-dev:amd64.
Preparing to unpack .../083-libsepol-dev_3.5-2build1_amd64.deb ...
Unpacking libsepol-dev:amd64 (3.5-2build1) ...
Selecting previously unselected package libselinux1-dev:amd64.
Preparing to unpack .../084-libselinux1-dev_3.5-2ubuntu2.1_amd64.deb ...
Unpacking libselinux1-dev:amd64 (3.5-2ubuntu2.1) ...
Selecting previously unselected package libmount-dev:amd64.
Preparing to unpack .../085-libmount-dev_2.39.3-9ubuntu6.5_amd64.deb ...
Unpacking libmount-dev:amd64 (2.39.3-9ubuntu6.5) ...
Selecting previously unselected package libgirepository-2.0-0:amd64.
Preparing to unpack .../086-libgirepository-2.0-0_2.80.0-6ubuntu3.8_amd64.deb ...
Unpacking libgirepository-2.0-0:amd64 (2.80.0-6ubuntu3.8) ...
Selecting previously unselected package libglib2.0-dev:amd64.
Preparing to unpack .../087-libglib2.0-dev_2.80.0-6ubuntu3.8_amd64.deb ...
Unpacking libglib2.0-dev:amd64 (2.80.0-6ubuntu3.8) ...
Selecting previously unselected package gobject-introspection:amd64.
Preparing to unpack .../088-gobject-introspection_1.80.1-1_amd64.deb ...
Unpacking gobject-introspection:amd64 (1.80.1-1) ...
Selecting previously unselected package libatk1.0-dev:amd64.
Preparing to unpack .../089-libatk1.0-dev_2.52.0-1build1_amd64.deb ...
Unpacking libatk1.0-dev:amd64 (2.52.0-1build1) ...
Selecting previously unselected package libdbus-1-dev:amd64.
Preparing to unpack .../090-libdbus-1-dev_1.14.10-4ubuntu4.1_amd64.deb ...
Unpacking libdbus-1-dev:amd64 (1.14.10-4ubuntu4.1) ...
Selecting previously unselected package xorg-sgml-doctools.
Preparing to unpack .../091-xorg-sgml-doctools_1%3a1.11-1.1_all.deb ...
Unpacking xorg-sgml-doctools (1:1.11-1.1) ...
Selecting previously unselected package x11proto-dev.
Preparing to unpack .../092-x11proto-dev_2023.2-1_all.deb ...
Unpacking x11proto-dev (2023.2-1) ...
Selecting previously unselected package libxau-dev:amd64.
Preparing to unpack .../093-libxau-dev_1%3a1.0.9-1build6_amd64.deb ...
Unpacking libxau-dev:amd64 (1:1.0.9-1build6) ...
Selecting previously unselected package libxdmcp-dev:amd64.
Preparing to unpack .../094-libxdmcp-dev_1%3a1.1.3-0ubuntu6_amd64.deb ...
Unpacking libxdmcp-dev:amd64 (1:1.1.3-0ubuntu6) ...
Selecting previously unselected package xtrans-dev.
Preparing to unpack .../095-xtrans-dev_1.4.0-1_all.deb ...
Unpacking xtrans-dev (1.4.0-1) ...
Selecting previously unselected package libpthread-stubs0-dev:amd64.
Preparing to unpack .../096-libpthread-stubs0-dev_0.4-1build3_amd64.deb ...
Unpacking libpthread-stubs0-dev:amd64 (0.4-1build3) ...
Selecting previously unselected package libxcb1-dev:amd64.
Preparing to unpack .../097-libxcb1-dev_1.15-1ubuntu2_amd64.deb ...
Unpacking libxcb1-dev:amd64 (1.15-1ubuntu2) ...
Selecting previously unselected package libx11-dev:amd64.
Preparing to unpack .../098-libx11-dev_2%3a1.8.7-1build1_amd64.deb ...
Unpacking libx11-dev:amd64 (2:1.8.7-1build1) ...
Selecting previously unselected package libxext-dev:amd64.
Preparing to unpack .../099-libxext-dev_2%3a1.3.4-1build2_amd64.deb ...
Unpacking libxext-dev:amd64 (2:1.3.4-1build2) ...
Selecting previously unselected package libxfixes-dev:amd64.
Preparing to unpack .../100-libxfixes-dev_1%3a6.0.0-2build1_amd64.deb ...
Unpacking libxfixes-dev:amd64 (1:6.0.0-2build1) ...
Selecting previously unselected package libxi-dev:amd64.
Preparing to unpack .../101-libxi-dev_2%3a1.8.1-1build1_amd64.deb ...
Unpacking libxi-dev:amd64 (2:1.8.1-1build1) ...
Selecting previously unselected package libxtst-dev:amd64.
Preparing to unpack .../102-libxtst-dev_2%3a1.2.3-1.1build1_amd64.deb ...
Unpacking libxtst-dev:amd64 (2:1.2.3-1.1build1) ...
Selecting previously unselected package libatspi2.0-dev:amd64.
Preparing to unpack .../103-libatspi2.0-dev_2.52.0-1build1_amd64.deb ...
Unpacking libatspi2.0-dev:amd64 (2.52.0-1build1) ...
Selecting previously unselected package libatk-bridge2.0-dev:amd64.
Preparing to unpack .../104-libatk-bridge2.0-dev_2.52.0-1build1_amd64.deb ...
Unpacking libatk-bridge2.0-dev:amd64 (2.52.0-1build1) ...
Selecting previously unselected package libcairo-script-interpreter2:amd64.
Preparing to unpack .../105-libcairo-script-interpreter2_1.18.0-3build1_amd64.deb ...
Unpacking libcairo-script-interpreter2:amd64 (1.18.0-3build1) ...
Selecting previously unselected package libbrotli-dev:amd64.
Preparing to unpack .../106-libbrotli-dev_1.1.0-2build2_amd64.deb ...
Unpacking libbrotli-dev:amd64 (1.1.0-2build2) ...
Selecting previously unselected package libbz2-dev:amd64.
Preparing to unpack .../107-libbz2-dev_1.0.8-5.1build0.1_amd64.deb ...
Unpacking libbz2-dev:amd64 (1.0.8-5.1build0.1) ...
Selecting previously unselected package libpng-dev:amd64.
Preparing to unpack .../108-libpng-dev_1.6.43-5ubuntu0.6_amd64.deb ...
Unpacking libpng-dev:amd64 (1.6.43-5ubuntu0.6) ...
Selecting previously unselected package libfreetype-dev:amd64.
Preparing to unpack .../109-libfreetype-dev_2.13.2+dfsg-1ubuntu0.1_amd64.deb ...
Unpacking libfreetype-dev:amd64 (2.13.2+dfsg-1ubuntu0.1) ...
Selecting previously unselected package libfontconfig-dev:amd64.
Preparing to unpack .../110-libfontconfig-dev_2.15.0-1.1ubuntu2_amd64.deb ...
Unpacking libfontconfig-dev:amd64 (2.15.0-1.1ubuntu2) ...
Selecting previously unselected package libpixman-1-dev:amd64.
Preparing to unpack .../111-libpixman-1-dev_0.42.2-1build1_amd64.deb ...
Unpacking libpixman-1-dev:amd64 (0.42.2-1build1) ...
Selecting previously unselected package libice-dev:amd64.
Preparing to unpack .../112-libice-dev_2%3a1.0.10-1build3_amd64.deb ...
Unpacking libice-dev:amd64 (2:1.0.10-1build3) ...
Selecting previously unselected package libsm-dev:amd64.
Preparing to unpack .../113-libsm-dev_2%3a1.2.3-1build3_amd64.deb ...
Unpacking libsm-dev:amd64 (2:1.2.3-1build3) ...
Selecting previously unselected package libxcb-render0-dev:amd64.
Preparing to unpack .../114-libxcb-render0-dev_1.15-1ubuntu2_amd64.deb ...
Unpacking libxcb-render0-dev:amd64 (1.15-1ubuntu2) ...
Selecting previously unselected package libxcb-shm0-dev:amd64.
Preparing to unpack .../115-libxcb-shm0-dev_1.15-1ubuntu2_amd64.deb ...
Unpacking libxcb-shm0-dev:amd64 (1.15-1ubuntu2) ...
Selecting previously unselected package libxrender-dev:amd64.
Preparing to unpack .../116-libxrender-dev_1%3a0.9.10-1.1build1_amd64.deb ...
Unpacking libxrender-dev:amd64 (1:0.9.10-1.1build1) ...
Selecting previously unselected package libcairo2-dev:amd64.
Preparing to unpack .../117-libcairo2-dev_1.18.0-3build1_amd64.deb ...
Unpacking libcairo2-dev:amd64 (1.18.0-3build1) ...
Selecting previously unselected package libglx-dev:amd64.
Preparing to unpack .../118-libglx-dev_1.7.0-1build1_amd64.deb ...
Unpacking libglx-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libgl-dev:amd64.
Preparing to unpack .../119-libgl-dev_1.7.0-1build1_amd64.deb ...
Unpacking libgl-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libegl-dev:amd64.
Preparing to unpack .../120-libegl-dev_1.7.0-1build1_amd64.deb ...
Unpacking libegl-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libglvnd-core-dev:amd64.
Preparing to unpack .../121-libglvnd-core-dev_1.7.0-1build1_amd64.deb ...
Unpacking libglvnd-core-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libgles1:amd64.
Preparing to unpack .../122-libgles1_1.7.0-1build1_amd64.deb ...
Unpacking libgles1:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libgles-dev:amd64.
Preparing to unpack .../123-libgles-dev_1.7.0-1build1_amd64.deb ...
Unpacking libgles-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libopengl0:amd64.
Preparing to unpack .../124-libopengl0_1.7.0-1build1_amd64.deb ...
Unpacking libopengl0:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libopengl-dev:amd64.
Preparing to unpack .../125-libopengl-dev_1.7.0-1build1_amd64.deb ...
Unpacking libopengl-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libglvnd-dev:amd64.
Preparing to unpack .../126-libglvnd-dev_1.7.0-1build1_amd64.deb ...
Unpacking libglvnd-dev:amd64 (1.7.0-1build1) ...
Selecting previously unselected package libegl1-mesa-dev:amd64.
Preparing to unpack .../127-libegl1-mesa-dev_25.2.8-0ubuntu0.24.04.2_amd64.deb ...
Unpacking libegl1-mesa-dev:amd64 (25.2.8-0ubuntu0.24.04.2) ...
Selecting previously unselected package libepoxy-dev:amd64.
Preparing to unpack .../128-libepoxy-dev_1.5.10-1build1_amd64.deb ...
Unpacking libepoxy-dev:amd64 (1.5.10-1build1) ...
Selecting previously unselected package libfribidi-dev:amd64.
Preparing to unpack .../129-libfribidi-dev_1.0.13-3build1_amd64.deb ...
Unpacking libfribidi-dev:amd64 (1.0.13-3build1) ...
Selecting previously unselected package libgdk-pixbuf2.0-bin.
Preparing to unpack .../130-libgdk-pixbuf2.0-bin_2.42.10+dfsg-3ubuntu3.3_amd64.deb ...
Unpacking libgdk-pixbuf2.0-bin (2.42.10+dfsg-3ubuntu3.3) ...
Selecting previously unselected package libjpeg-turbo8-dev:amd64.
Preparing to unpack .../131-libjpeg-turbo8-dev_2.1.5-2ubuntu2_amd64.deb ...
Unpacking libjpeg-turbo8-dev:amd64 (2.1.5-2ubuntu2) ...
Selecting previously unselected package libjpeg8-dev:amd64.
Preparing to unpack .../132-libjpeg8-dev_8c-2ubuntu11_amd64.deb ...
Unpacking libjpeg8-dev:amd64 (8c-2ubuntu11) ...
Selecting previously unselected package libjpeg-dev:amd64.
Preparing to unpack .../133-libjpeg-dev_8c-2ubuntu11_amd64.deb ...
Unpacking libjpeg-dev:amd64 (8c-2ubuntu11) ...
Selecting previously unselected package libjbig-dev:amd64.
Preparing to unpack .../134-libjbig-dev_2.1-6.1ubuntu2_amd64.deb ...
Unpacking libjbig-dev:amd64 (2.1-6.1ubuntu2) ...
Selecting previously unselected package liblzma-dev:amd64.
Preparing to unpack .../135-liblzma-dev_5.6.1+really5.4.5-1ubuntu0.3_amd64.deb ...
Unpacking liblzma-dev:amd64 (5.6.1+really5.4.5-1ubuntu0.3) ...
Selecting previously unselected package libwebpdecoder3:amd64.
Preparing to unpack .../136-libwebpdecoder3_1.3.2-0.4build3_amd64.deb ...
Unpacking libwebpdecoder3:amd64 (1.3.2-0.4build3) ...
Selecting previously unselected package libsharpyuv-dev:amd64.
Preparing to unpack .../137-libsharpyuv-dev_1.3.2-0.4build3_amd64.deb ...
Unpacking libsharpyuv-dev:amd64 (1.3.2-0.4build3) ...
Selecting previously unselected package libwebp-dev:amd64.
Preparing to unpack .../138-libwebp-dev_1.3.2-0.4build3_amd64.deb ...
Unpacking libwebp-dev:amd64 (1.3.2-0.4build3) ...
Selecting previously unselected package libtiffxx6:amd64.
Preparing to unpack .../139-libtiffxx6_4.5.1+git230720-4ubuntu2.5_amd64.deb ...
Unpacking libtiffxx6:amd64 (4.5.1+git230720-4ubuntu2.5) ...
Selecting previously unselected package libdeflate-dev:amd64.
Preparing to unpack .../140-libdeflate-dev_1.19-1build1.1_amd64.deb ...
Unpacking libdeflate-dev:amd64 (1.19-1build1.1) ...
Selecting previously unselected package liblerc-dev:amd64.
Preparing to unpack .../141-liblerc-dev_4.0.0+ds-4ubuntu2_amd64.deb ...
Unpacking liblerc-dev:amd64 (4.0.0+ds-4ubuntu2) ...
Selecting previously unselected package libtiff-dev:amd64.
Preparing to unpack .../142-libtiff-dev_4.5.1+git230720-4ubuntu2.5_amd64.deb ...
Unpacking libtiff-dev:amd64 (4.5.1+git230720-4ubuntu2.5) ...
Selecting previously unselected package libgdk-pixbuf-2.0-dev:amd64.
Preparing to unpack .../143-libgdk-pixbuf-2.0-dev_2.42.10+dfsg-3ubuntu3.3_amd64.deb ...
Unpacking libgdk-pixbuf-2.0-dev:amd64 (2.42.10+dfsg-3ubuntu3.3) ...
Selecting previously unselected package libharfbuzz-subset0:amd64.
Preparing to unpack .../144-libharfbuzz-subset0_8.3.0-2build2_amd64.deb ...
Unpacking libharfbuzz-subset0:amd64 (8.3.0-2build2) ...
Selecting previously unselected package libharfbuzz-cairo0:amd64.
Preparing to unpack .../145-libharfbuzz-cairo0_8.3.0-2build2_amd64.deb ...
Unpacking libharfbuzz-cairo0:amd64 (8.3.0-2build2) ...
Selecting previously unselected package libgraphite2-dev:amd64.
Preparing to unpack .../146-libgraphite2-dev_1.3.14-2ubuntu0.24.04.1_amd64.deb ...
Unpacking libgraphite2-dev:amd64 (1.3.14-2ubuntu0.24.04.1) ...
Selecting previously unselected package libharfbuzz-dev:amd64.
Preparing to unpack .../147-libharfbuzz-dev_8.3.0-2build2_amd64.deb ...
Unpacking libharfbuzz-dev:amd64 (8.3.0-2build2) ...
Selecting previously unselected package libdatrie-dev:amd64.
Preparing to unpack .../148-libdatrie-dev_0.2.13-3build1_amd64.deb ...
Unpacking libdatrie-dev:amd64 (0.2.13-3build1) ...
Selecting previously unselected package libthai-dev:amd64.
Preparing to unpack .../149-libthai-dev_0.1.29-2build1_amd64.deb ...
Unpacking libthai-dev:amd64 (0.1.29-2build1) ...
Selecting previously unselected package libxft-dev:amd64.
Preparing to unpack .../150-libxft-dev_2.3.6-1build1_amd64.deb ...
Unpacking libxft-dev:amd64 (2.3.6-1build1) ...
Selecting previously unselected package pango1.0-tools.
Preparing to unpack .../151-pango1.0-tools_1.52.1+ds-1build1_amd64.deb ...
Unpacking pango1.0-tools (1.52.1+ds-1build1) ...
Selecting previously unselected package libpango1.0-dev:amd64.
Preparing to unpack .../152-libpango1.0-dev_1.52.1+ds-1build1_amd64.deb ...
Unpacking libpango1.0-dev:amd64 (1.52.1+ds-1build1) ...
Selecting previously unselected package libwayland-bin.
Preparing to unpack .../153-libwayland-bin_1.22.0-2.1build1_amd64.deb ...
Unpacking libwayland-bin (1.22.0-2.1build1) ...
Selecting previously unselected package libwayland-dev:amd64.
Preparing to unpack .../154-libwayland-dev_1.22.0-2.1build1_amd64.deb ...
Unpacking libwayland-dev:amd64 (1.22.0-2.1build1) ...
Selecting previously unselected package libxcomposite-dev:amd64.
Preparing to unpack .../155-libxcomposite-dev_1%3a0.4.5-1build3_amd64.deb ...
Unpacking libxcomposite-dev:amd64 (1:0.4.5-1build3) ...
Selecting previously unselected package libxcursor-dev:amd64.
Preparing to unpack .../156-libxcursor-dev_1%3a1.2.1-1build1_amd64.deb ...
Unpacking libxcursor-dev:amd64 (1:1.2.1-1build1) ...
Selecting previously unselected package libxdamage-dev:amd64.
Preparing to unpack .../157-libxdamage-dev_1%3a1.1.6-1build1_amd64.deb ...
Unpacking libxdamage-dev:amd64 (1:1.1.6-1build1) ...
Selecting previously unselected package libxinerama-dev:amd64.
Preparing to unpack .../158-libxinerama-dev_2%3a1.1.4-3build1_amd64.deb ...
Unpacking libxinerama-dev:amd64 (2:1.1.4-3build1) ...
Selecting previously unselected package libxkbcommon-dev:amd64.
Preparing to unpack .../159-libxkbcommon-dev_1.6.0-1build1_amd64.deb ...
Unpacking libxkbcommon-dev:amd64 (1.6.0-1build1) ...
Selecting previously unselected package libxrandr-dev:amd64.
Preparing to unpack .../160-libxrandr-dev_2%3a1.5.2-2build1_amd64.deb ...
Unpacking libxrandr-dev:amd64 (2:1.5.2-2build1) ...
Selecting previously unselected package wayland-protocols.
Preparing to unpack .../161-wayland-protocols_1.45-1~ubuntu0.24.04.2_all.deb ...
Unpacking wayland-protocols (1.45-1~ubuntu0.24.04.2) ...
Selecting previously unselected package libgtk-3-dev:amd64.
Preparing to unpack .../162-libgtk-3-dev_3.24.41-4ubuntu1.3_amd64.deb ...
Unpacking libgtk-3-dev:amd64 (3.24.41-4ubuntu1.3) ...
Selecting previously unselected package libayatana-ido3-dev.
Preparing to unpack .../163-libayatana-ido3-dev_0.10.1-1build2_amd64.deb ...
Unpacking libayatana-ido3-dev (0.10.1-1build2) ...
Selecting previously unselected package libayatana-indicator3-dev.
Preparing to unpack .../164-libayatana-indicator3-dev_0.9.4-1build1_amd64.deb ...
Unpacking libayatana-indicator3-dev (0.9.4-1build1) ...
Selecting previously unselected package libdbusmenu-glib-dev:amd64.
Preparing to unpack .../165-libdbusmenu-glib-dev_18.10.20180917~bzr492+repack1-3.1ubuntu5_amd64.deb ...
Unpacking libdbusmenu-glib-dev:amd64 (18.10.20180917~bzr492+repack1-3.1ubuntu5) ...
Selecting previously unselected package libayatana-appindicator3-dev.
Preparing to unpack .../166-libayatana-appindicator3-dev_0.5.93-1build3_amd64.deb ...
Unpacking libayatana-appindicator3-dev (0.5.93-1build3) ...
Selecting previously unselected package libgirepository-1.0-dev:amd64.
Preparing to unpack .../167-libgirepository-1.0-dev_1.80.1-1_amd64.deb ...
Unpacking libgirepository-1.0-dev:amd64 (1.80.1-1) ...
Selecting previously unselected package libgirepository1.0-dev.
Preparing to unpack .../168-libgirepository1.0-dev_1.80.1-1_amd64.deb ...
Unpacking libgirepository1.0-dev (1.80.1-1) ...
Selecting previously unselected package libjavascriptcoregtk-4.1-dev:amd64.
Preparing to unpack .../169-libjavascriptcoregtk-4.1-dev_2.52.3-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libjavascriptcoregtk-4.1-dev:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Selecting previously unselected package libnghttp2-dev:amd64.
Preparing to unpack .../170-libnghttp2-dev_1.59.0-1ubuntu0.4_amd64.deb ...
Unpacking libnghttp2-dev:amd64 (1.59.0-1ubuntu0.4) ...
Selecting previously unselected package libpsl-dev:amd64.
Preparing to unpack .../171-libpsl-dev_0.21.2-1.1build1_amd64.deb ...
Unpacking libpsl-dev:amd64 (0.21.2-1.1build1) ...
Selecting previously unselected package librsvg2-common:amd64.
Preparing to unpack .../172-librsvg2-common_2.58.0+dfsg-1build1_amd64.deb ...
Unpacking librsvg2-common:amd64 (2.58.0+dfsg-1build1) ...
Selecting previously unselected package librsvg2-dev:amd64.
Preparing to unpack .../173-librsvg2-dev_2.58.0+dfsg-1build1_amd64.deb ...
Unpacking librsvg2-dev:amd64 (2.58.0+dfsg-1build1) ...
Selecting previously unselected package libsysprof-capture-4-dev:amd64.
Preparing to unpack .../174-libsysprof-capture-4-dev_46.0-1build1_amd64.deb ...
Unpacking libsysprof-capture-4-dev:amd64 (46.0-1build1) ...
Selecting previously unselected package libsoup-3.0-dev:amd64.
Preparing to unpack .../175-libsoup-3.0-dev_3.4.4-5ubuntu0.7_amd64.deb ...
Unpacking libsoup-3.0-dev:amd64 (3.4.4-5ubuntu0.7) ...
Selecting previously unselected package libwebkit2gtk-4.1-dev.
Preparing to unpack .../176-libwebkit2gtk-4.1-dev_2.52.3-0ubuntu0.24.04.1_amd64.deb ...
Unpacking libwebkit2gtk-4.1-dev (2.52.3-0ubuntu0.24.04.1) ...
Setting up bubblewrap (0.9.0-1ubuntu0.1) ...
Setting up libcairo-script-interpreter2:amd64 (1.18.0-3build1) ...
Setting up libglib2.0-dev-bin (2.80.0-6ubuntu3.8) ...
Setting up libcdparanoia0:amd64 (3.10.2+debian-14build3) ...
Setting up libwayland-server0:amd64 (1.22.0-2.1build1) ...
Setting up libnghttp2-dev:amd64 (1.59.0-1ubuntu0.4) ...
Setting up session-migration (0.3.9build1) ...
Created symlink /etc/systemd/user/graphical-session-pre.target.wants/session-migration.service → /usr/lib/systemd/user/session-migration.service.

Setting up libjpeg-turbo8-dev:amd64 (2.1.5-2ubuntu2) ...
Setting up libraw1394-11:amd64 (2.1.2-2build3) ...
Setting up libproxy1v5:amd64 (0.5.4-4build1) ...
Setting up gir1.2-freedesktop:amd64 (1.80.1-1) ...
Setting up libtag1v5-vanilla:amd64 (1.13.1-1build1) ...
Setting up libharfbuzz-icu0:amd64 (8.3.0-2build2) ...
Setting up libpixman-1-dev:amd64 (0.42.2-1build1) ...
Setting up libspeex1:amd64 (1.2.1-2ubuntu2.24.04.1) ...
Setting up libcaca0:amd64 (0.99.beta20-4ubuntu0.2) ...
Setting up libv4lconvert0t64:amd64 (1.26.1-4build3) ...
Setting up libpangoxft-1.0-0:amd64 (1.52.1+ds-1build1) ...
Setting up gir1.2-dbusmenu-glib-0.4:amd64 (18.10.20180917~bzr492+repack1-3.1ubuntu5) ...
Setting up libglvnd-core-dev:amd64 (1.7.0-1build1) ...
Setting up libtwolame0:amd64 (0.4.0-2build3) ...
Setting up gir1.2-gdkpixbuf-2.0:amd64 (2.42.10+dfsg-3ubuntu3.3) ...
Setting up libhyphen0:amd64 (2.8.8-7build3) ...
Setting up libgirepository-2.0-0:amd64 (2.80.0-6ubuntu3.8) ...
Setting up libvisual-0.4-0:amd64 (0.4.2-2build1) ...
Setting up gir1.2-atk-1.0:amd64 (2.52.0-1build1) ...
Setting up libfribidi-dev:amd64 (1.0.13-3build1) ...
Setting up libmanette-0.2-0:amd64 (0.2.7-1build2) ...
Setting up libxkbcommon-dev:amd64 (1.6.0-1build1) ...
Setting up libpng-dev:amd64 (1.6.43-5ubuntu0.6) ...
Setting up pango1.0-tools (1.52.1+ds-1build1) ...
Setting up libjbig-dev:amd64 (2.1-6.1ubuntu2) ...
Setting up libwebpdecoder3:amd64 (1.3.2-0.4build3) ...
Setting up libharfbuzz-gobject0:amd64 (8.3.0-2build2) ...
Setting up gir1.2-atspi-2.0:amd64 (2.52.0-1build1) ...
Setting up libsoup-3.0-common (3.4.4-5ubuntu0.7) ...
Setting up libmpg123-0t64:amd64 (1.32.5-1ubuntu1.1) ...
Setting up libayatana-ido3-0.4-0:amd64 (0.10.1-1build2) ...
Setting up gir1.2-harfbuzz-0.0:amd64 (8.3.0-2build2) ...
Setting up libpthread-stubs0-dev:amd64 (0.4-1build3) ...
Setting up libopengl0:amd64 (1.7.0-1build1) ...
Setting up libpsl-dev:amd64 (0.21.2-1.1build1) ...
Setting up liborc-0.4-0t64:amd64 (1:0.4.38-1ubuntu0.1) ...
Setting up librsvg2-2:amd64 (2.58.0+dfsg-1build1) ...
Setting up libsysprof-capture-4-dev:amd64 (46.0-1build1) ...
Setting up xtrans-dev (1.4.0-1) ...
Setting up libwayland-bin (1.22.0-2.1build1) ...
Setting up libgraphite2-dev:amd64 (1.3.14-2ubuntu0.24.04.1) ...
Setting up gir1.2-pango-1.0:amd64 (1.52.1+ds-1build1) ...
Setting up libegl-mesa0:amd64 (25.2.8-0ubuntu0.24.04.2) ...
Setting up libjavascriptcoregtk-4.1-0:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Setting up libgles2:amd64 (1.7.0-1build1) ...
Setting up libharfbuzz-cairo0:amd64 (8.3.0-2build2) ...
Setting up libdbus-1-dev:amd64 (1.14.10-4ubuntu4.1) ...
Setting up uuid-dev:amd64 (2.39.3-9ubuntu6.5) ...
Setting up libgles1:amd64 (1.7.0-1build1) ...
Setting up libopus0:amd64 (1.4-1build1) ...
Setting up python3-markdown (3.5.2-1) ...
Setting up libdv4t64:amd64 (1.0.0-17.1build1) ...
Setting up libsepol-dev:amd64 (3.5-2build1) ...
Setting up liblerc-dev:amd64 (4.0.0+ds-4ubuntu2) ...
Setting up librsvg2-common:amd64 (2.58.0+dfsg-1build1) ...
Setting up libdbusmenu-glib-dev:amd64 (18.10.20180917~bzr492+repack1-3.1ubuntu5) ...
Setting up libv4l-0t64:amd64 (1.26.1-4build3) ...
Setting up liblzma-dev:amd64 (5.6.1+really5.4.5-1ubuntu0.3) ...
Setting up gir1.2-ayatanaido3-0.4:amd64 (0.10.1-1build2) ...
Setting up xdg-dbus-proxy (0.1.5-1ubuntu0.2) ...
Setting up libvpx9:amd64 (1.14.0-1ubuntu2.3) ...
Setting up wayland-protocols (1.45-1~ubuntu0.24.04.2) ...
Setting up libtag1v5:amd64 (1.13.1-1build1) ...
Setting up libdatrie-dev:amd64 (0.2.13-3build1) ...
Setting up gir1.2-glib-2.0-dev:amd64 (2.80.0-6ubuntu3.8) ...
Setting up libasyncns0:amd64 (0.8-6build4) ...
Setting up libgdk-pixbuf2.0-bin (2.42.10+dfsg-3ubuntu3.3) ...
Setting up libwavpack1:amd64 (5.6.0-1build1) ...
Setting up libtheora0:amd64 (1.1.1+dfsg.1-16.1build3) ...
Setting up libegl1:amd64 (1.7.0-1build1) ...
Setting up libharfbuzz-subset0:amd64 (8.3.0-2build2) ...
Setting up build-essential (12.10ubuntu1) ...
Setting up xorg-sgml-doctools (1:1.11-1.1) ...
Setting up libflac12t64:amd64 (1.4.3+ds-2.1ubuntu2) ...
Setting up libopengl-dev:amd64 (1.7.0-1build1) ...
Setting up glib-networking-common (2.80.0-1build1) ...
Setting up libjpeg8-dev:amd64 (8c-2ubuntu11) ...
Setting up gir1.2-rsvg-2.0:amd64 (2.58.0+dfsg-1build1) ...
Setting up libsharpyuv-dev:amd64 (1.3.2-0.4build3) ...
Setting up libayatana-indicator3-7:amd64 (0.9.4-1build1) ...
Setting up libtiffxx6:amd64 (4.5.1+git230720-4ubuntu2.5) ...
Setting up libdeflate-dev:amd64 (1.19-1build1.1) ...
Setting up libbrotli-dev:amd64 (1.1.0-2build2) ...
Setting up libsecret-common (0.21.4-1build3) ...
Setting up libmp3lame0:amd64 (3.100-6build1) ...
Setting up python3-mako (1.3.2-1ubuntu0.1) ...
Setting up libvorbisenc2:amd64 (1.3.7-1build3) ...
Setting up libaa1:amd64 (1.4p5-51.1) ...
Setting up libiec61883-0:amd64 (1.2.0-6build1) ...
Setting up libbz2-dev:amd64 (1.0.8-5.1build0.1) ...
Setting up libavc1394-0:amd64 (0.5.4-5build3) ...
Setting up gsettings-desktop-schemas (46.1-0ubuntu1) ...
Setting up glib-networking-services (2.80.0-1build1) ...
Setting up libblkid-dev:amd64 (2.39.3-9ubuntu6.5) ...
Setting up libselinux1-dev:amd64 (3.5-2ubuntu2.1) ...
Setting up gobject-introspection-bin (1.80.1-1) ...
Setting up gir1.2-gtk-3.0:amd64 (3.24.41-4ubuntu1.3) ...
Setting up libjpeg-dev:amd64 (8c-2ubuntu11) ...
Setting up libgstreamer-plugins-base1.0-0:amd64 (1.24.2-1ubuntu0.4) ...
Setting up gir1.2-girepository-2.0-dev:amd64 (1.80.1-1) ...
Setting up libwayland-dev:amd64 (1.22.0-2.1build1) ...
Setting up gir1.2-javascriptcoregtk-4.1:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Setting up libfreetype-dev:amd64 (2.13.2+dfsg-1ubuntu0.1) ...
Setting up libsecret-1-0:amd64 (0.21.4-1build3) ...
Setting up libgstreamer-plugins-good1.0-0:amd64 (1.24.2-1ubuntu1.5) ...
Setting up libwebp-dev:amd64 (1.3.2-0.4build3) ...
Setting up libgstreamer-gl1.0-0:amd64 (1.24.2-1ubuntu0.4) ...
Setting up gstreamer1.0-plugins-base:amd64 (1.24.2-1ubuntu0.4) ...
Setting up libtiff-dev:amd64 (4.5.1+git230720-4ubuntu2.5) ...
Setting up libayatana-appindicator3-1 (0.5.93-1build3) ...
Setting up gir1.2-freedesktop-dev:amd64 (1.80.1-1) ...
Setting up libshout3:amd64 (2.4.6-1build2) ...
Setting up libthai-dev:amd64 (0.1.29-2build1) ...
Setting up libsndfile1:amd64 (1.2.2-1ubuntu5.24.04.1) ...
Setting up gir1.2-ayatanaappindicator3-0.1 (0.5.93-1build3) ...
Setting up libmount-dev:amd64 (2.39.3-9ubuntu6.5) ...
Setting up libpulse0:amd64 (1:16.1+dfsg1-2ubuntu10.1) ...
Setting up libfontconfig-dev:amd64 (2.15.0-1.1ubuntu2) ...
Setting up libglib2.0-dev:amd64 (2.80.0-6ubuntu3.8) ...
Processing triggers for libgdk-pixbuf-2.0-0:amd64 (2.42.10+dfsg-3ubuntu3.3) ...
Processing triggers for sgml-base (1.31) ...
Setting up x11proto-dev (2023.2-1) ...
Setting up libxau-dev:amd64 (1:1.0.9-1build6) ...
Setting up libice-dev:amd64 (2:1.0.10-1build3) ...
Setting up libsm-dev:amd64 (2:1.2.3-1build3) ...
Processing triggers for libc-bin (2.39-0ubuntu8.7) ...
Processing triggers for man-db (2.12.0-4build2) ...
Not building database; man-db/auto-update is not 'true'.
Setting up libxdmcp-dev:amd64 (1:1.1.3-0ubuntu6) ...
Processing triggers for libglib2.0-0t64:amd64 (2.80.0-6ubuntu3.8) ...
Setting up glib-networking:amd64 (2.80.0-1build1) ...
Setting up libjavascriptcoregtk-4.1-dev:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Setting up libatk1.0-dev:amd64 (2.52.0-1build1) ...
Setting up libgdk-pixbuf-2.0-dev:amd64 (2.42.10+dfsg-3ubuntu3.3) ...
Setting up libharfbuzz-dev:amd64 (8.3.0-2build2) ...
Setting up libxcb1-dev:amd64 (1.15-1ubuntu2) ...
Setting up libsoup-3.0-0:amd64 (3.4.4-5ubuntu0.7) ...
Setting up libx11-dev:amd64 (2:1.8.7-1build1) ...
Setting up gobject-introspection:amd64 (1.80.1-1) ...
Setting up libxfixes-dev:amd64 (1:6.0.0-2build1) ...
Setting up libxcb-shm0-dev:amd64 (1.15-1ubuntu2) ...
Setting up libgirepository-1.0-dev:amd64 (1.80.1-1) ...
Setting up libxcb-render0-dev:amd64 (1.15-1ubuntu2) ...
Setting up libxext-dev:amd64 (2:1.3.4-1build2) ...
Setting up gir1.2-soup-3.0:amd64 (3.4.4-5ubuntu0.7) ...
Setting up libglx-dev:amd64 (1.7.0-1build1) ...
Setting up libxi-dev:amd64 (2:1.8.1-1build1) ...
Setting up libxrender-dev:amd64 (1:0.9.10-1.1build1) ...
Setting up libgl-dev:amd64 (1.7.0-1build1) ...
Setting up libxft-dev:amd64 (2.3.6-1build1) ...
Setting up libxtst-dev:amd64 (2:1.2.3-1.1build1) ...
Setting up libxdamage-dev:amd64 (1:1.1.6-1build1) ...
Setting up libatspi2.0-dev:amd64 (2.52.0-1build1) ...
Setting up libegl-dev:amd64 (1.7.0-1build1) ...
Setting up libxcomposite-dev:amd64 (1:0.4.5-1build3) ...
Setting up libxcursor-dev:amd64 (1:1.2.1-1build1) ...
Setting up gstreamer1.0-plugins-good:amd64 (1.24.2-1ubuntu1.5) ...
Setting up libepoxy-dev:amd64 (1.5.10-1build1) ...
Setting up libatk-bridge2.0-dev:amd64 (2.52.0-1build1) ...
Setting up libxrandr-dev:amd64 (2:1.5.2-2build1) ...
Setting up libsoup-3.0-dev:amd64 (3.4.4-5ubuntu0.7) ...
Setting up libgirepository1.0-dev (1.80.1-1) ...
Setting up libxinerama-dev:amd64 (2:1.1.4-3build1) ...
Setting up libcairo2-dev:amd64 (1.18.0-3build1) ...
Setting up libgles-dev:amd64 (1.7.0-1build1) ...
Setting up libwebkit2gtk-4.1-0:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Setting up gir1.2-webkit2-4.1:amd64 (2.52.3-0ubuntu0.24.04.1) ...
Setting up libglvnd-dev:amd64 (1.7.0-1build1) ...
Setting up libpango1.0-dev:amd64 (1.52.1+ds-1build1) ...
Setting up librsvg2-dev:amd64 (2.58.0+dfsg-1build1) ...
Setting up libegl1-mesa-dev:amd64 (25.2.8-0ubuntu0.24.04.2) ...
Setting up libgtk-3-dev:amd64 (3.24.41-4ubuntu1.3) ...
Setting up libayatana-ido3-dev (0.10.1-1build2) ...
Setting up libayatana-indicator3-dev (0.9.4-1build1) ...
Setting up libwebkit2gtk-4.1-dev (2.52.3-0ubuntu0.24.04.1) ...
Setting up libayatana-appindicator3-dev (0.5.93-1build3) ...
Processing triggers for libc-bin (2.39-0ubuntu8.7) ...

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.

```

Exit code: `0`

## Install dependencies

```text
? Verifying lockfile against supply-chain policies (120 entries)...
Progress: resolved 1, reused 0, downloaded 0, added 0
Progress: resolved 21, reused 0, downloaded 20, added 0
✓ Lockfile passes supply-chain policies (120 entries in 1.5s)
Progress: resolved 102, reused 0, downloaded 88, added 0
Progress: resolved 245, reused 0, downloaded 210, added 0
Packages: +204
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 245, reused 0, downloaded 210, added 204, done

dependencies:
+ @xyflow/react 12.11.2
+ lucide-react 0.468.0 (1.26.0 is available)
+ react 19.2.8
+ react-dom 19.2.8
+ zod 3.25.76 (4.4.3 is available)
+ zustand 5.0.14

devDependencies:
+ @eslint/js 10.0.1
+ @tauri-apps/cli 2.11.4
+ @types/node 22.20.1 (26.1.1 is available)
+ @types/react 19.2.17
+ @types/react-dom 19.2.3
+ @vitejs/plugin-react 6.0.4
+ eslint 10.7.0 (10.8.0 is available)
+ eslint-config-prettier 10.1.8
+ eslint-plugin-react-hooks 7.1.1
+ eslint-plugin-react-refresh 0.5.3
+ globals 17.7.0
+ prettier 3.9.6
+ typescript 5.9.3 (7.0.2 is available)
+ typescript-eslint 8.65.0
+ vite 8.1.5
+ vitest 4.1.10

Done in 4.3s using pnpm v11.17.0

```

Exit code: `0`

## Install Rust components

```text
info: component clippy is up to date
info: component rustfmt is up to date

```

Exit code: `0`

## Generate Tauri icons

```text
$ tauri icon src-tauri/app-icon.svg
        Appx Creating StoreLogo.png
        Appx Creating Square30x30Logo.png
        Appx Creating Square44x44Logo.png
        Appx Creating Square71x71Logo.png
        Appx Creating Square89x89Logo.png
        Appx Creating Square107x107Logo.png
        Appx Creating Square142x142Logo.png
        Appx Creating Square150x150Logo.png
        Appx Creating Square284x284Logo.png
        Appx Creating Square310x310Logo.png
        ICNS Creating icon.icns
         ICO Creating icon.ico
         PNG Creating 32x32.png
         PNG Creating 64x64.png
         PNG Creating 128x128.png
         PNG Creating 128x128@2x.png
         PNG Creating icon.png
         iOS Creating AppIcon-20x20@2x-1.png
         iOS Creating AppIcon-20x20@1x.png
         iOS Creating AppIcon-20x20@2x.png
         iOS Creating AppIcon-20x20@3x.png
         iOS Creating AppIcon-29x29@2x-1.png
         iOS Creating AppIcon-29x29@1x.png
         iOS Creating AppIcon-29x29@2x.png
         iOS Creating AppIcon-29x29@3x.png
         iOS Creating AppIcon-40x40@2x-1.png
         iOS Creating AppIcon-40x40@1x.png
         iOS Creating AppIcon-40x40@2x.png
         iOS Creating AppIcon-40x40@3x.png
         iOS Creating AppIcon-60x60@2x.png
         iOS Creating AppIcon-60x60@3x.png
         iOS Creating AppIcon-76x76@1x.png
         iOS Creating AppIcon-76x76@2x.png
         iOS Creating AppIcon-83.5x83.5@2x.png
         iOS Creating AppIcon-512@2x.png
     Android Creating mipmap-hdpi/ic_launcher_foreground.png
     Android Creating mipmap-mdpi/ic_launcher_foreground.png
     Android Creating mipmap-xhdpi/ic_launcher_foreground.png
     Android Creating mipmap-xxhdpi/ic_launcher_foreground.png
     Android Creating mipmap-xxxhdpi/ic_launcher_foreground.png
     Android Creating mipmap-hdpi/ic_launcher_round.png
     Android Creating mipmap-hdpi/ic_launcher.png
     Android Creating mipmap-mdpi/ic_launcher_round.png
     Android Creating mipmap-mdpi/ic_launcher.png
     Android Creating mipmap-xhdpi/ic_launcher_round.png
     Android Creating mipmap-xhdpi/ic_launcher.png
     Android Creating mipmap-xxhdpi/ic_launcher_round.png
     Android Creating mipmap-xxhdpi/ic_launcher.png
     Android Creating mipmap-xxxhdpi/ic_launcher_round.png
     Android Creating mipmap-xxxhdpi/ic_launcher.png

```

Exit code: `0`

## Prettier write

```text

```

$ prettier . --write
.ci/cleanup-report.md 57ms
[90m.github/workflows/ci.yml[39m 23ms (unchanged)
[90m.github/workflows/repository-cleanup.yml[39m 6ms (unchanged)
[90m.prettierrc.json[39m 22ms (unchanged)
[90mAGENTS.md[39m 13ms (unchanged)
[90mdocs/design-system.md[39m 23ms (unchanged)
[90meslint.config.js[39m 12ms (unchanged)
[90mindex.html[39m 24ms (unchanged)
[90mpackage.json[39m 2ms (unchanged)
[90mREADME.md[39m 22ms (unchanged)
scripts/check-changed-format.mjs 16ms
scripts/check-design-tokens.mjs 7ms
[90mscripts/tauri.mjs[39m 6ms (unchanged)
src-tauri/gen/schemas/acl-manifests.json 81ms
src-tauri/gen/schemas/capabilities.json 1ms
src-tauri/gen/schemas/desktop-schema.json 34ms
src-tauri/gen/schemas/windows-schema.json 21ms
[90msrc-tauri/tauri.conf.json[39m 1ms (unchanged)
src/App.tsx 99ms
src/components/GlobalShortcuts.tsx 5ms
src/components/graph-presentation.test.ts 8ms
[90msrc/components/graph-presentation.ts[39m 5ms (unchanged)
[90msrc/components/keyboard-shortcuts.test.ts[39m 2ms (unchanged)
[90msrc/components/keyboard-shortcuts.ts[39m 2ms (unchanged)
src/components/status-meta.ts 2ms
src/components/topic-layout.test.ts 4ms
src/components/topic-layout.ts 5ms
src/components/TopicNode.tsx 22ms
[90msrc/domain/graph.test.ts[39m 7ms (unchanged)
[90msrc/domain/graph.ts[39m 7ms (unchanged)
src/interaction-performance.css 31ms
[90msrc/main.tsx[39m 2ms (unchanged)
src/stores/graph-store.test.ts 15ms
src/stores/graph-store.ts 37ms
src/stores/topic-actions.test.ts 5ms
src/stores/topic-actions.ts 6ms
src/styles.css 61ms
src/theme.css 12ms
[90mtsconfig.app.json[39m 1ms (unchanged)
tsconfig.json 1ms
[90mtsconfig.node.json[39m 1ms (unchanged)
[90mvite.config.ts[39m 2ms (unchanged)

````

Exit code: `0`

## ESLint fix

```text
$ eslint . --fix

Oops! Something went wrong! :(

ESLint: 10.7.0

TypeError: Key "rules": Key "react-refresh/only-export-components": Could not find "only-export-components" in plugin "react-refresh".
    at throwRuleNotFoundError (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/config.js:100:16)
    at Config.validateRulesConfig (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/config.js:691:5)
    at new Config (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/config.js:554:9)
    at [finalizeConfig] (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/flat-config-array.js:212:10)
    at FlatConfigArray.getConfigWithStatus (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@eslint+config-array@0.23.5/node_modules/@eslint/config-array/dist/cjs/index.cjs:1411:55)
    at FlatConfigArray.getConfig (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@eslint+config-array@0.23.5/node_modules/@eslint/config-array/dist/cjs/index.cjs:1429:15)
    at entryFilter (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/eslint/eslint-helpers.js:325:27)
    at async NodeHfs.<anonymous> (file:///home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@humanfs+core@0.19.2/node_modules/@humanfs/core/src/hfs.js:574:24)
    at async NodeHfs.<anonymous> (file:///home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@humanfs+core@0.19.2/node_modules/@humanfs/core/src/hfs.js:604:6)
    at async NodeHfs.walk (file:///home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@humanfs+core@0.19.2/node_modules/@humanfs/core/src/hfs.js:614:3)
[ELIFECYCLE] Command failed with exit code 2.

````

Exit code: `2`

## Prettier write after ESLint

```text

```

$ prettier . --write
.ci/cleanup-report.md 65ms
[90m.github/workflows/ci.yml[39m 20ms (unchanged)
[90m.github/workflows/repository-cleanup.yml[39m 6ms (unchanged)
[90m.prettierrc.json[39m 14ms (unchanged)
[90mAGENTS.md[39m 15ms (unchanged)
[90mdocs/design-system.md[39m 18ms (unchanged)
[90meslint.config.js[39m 15ms (unchanged)
[90mindex.html[39m 18ms (unchanged)
[90mpackage.json[39m 2ms (unchanged)
[90mREADME.md[39m 19ms (unchanged)
[90mscripts/check-changed-format.mjs[39m 16ms (unchanged)
[90mscripts/check-design-tokens.mjs[39m 10ms (unchanged)
[90mscripts/tauri.mjs[39m 5ms (unchanged)
[90msrc-tauri/gen/schemas/acl-manifests.json[39m 80ms (unchanged)
[90msrc-tauri/gen/schemas/capabilities.json[39m 1ms (unchanged)
[90msrc-tauri/gen/schemas/desktop-schema.json[39m 37ms (unchanged)
[90msrc-tauri/gen/schemas/windows-schema.json[39m 24ms (unchanged)
[90msrc-tauri/tauri.conf.json[39m 1ms (unchanged)
[90msrc/App.tsx[39m 85ms (unchanged)
[90msrc/components/GlobalShortcuts.tsx[39m 4ms (unchanged)
[90msrc/components/graph-presentation.test.ts[39m 6ms (unchanged)
[90msrc/components/graph-presentation.ts[39m 4ms (unchanged)
[90msrc/components/keyboard-shortcuts.test.ts[39m 3ms (unchanged)
[90msrc/components/keyboard-shortcuts.ts[39m 2ms (unchanged)
[90msrc/components/status-meta.ts[39m 2ms (unchanged)
[90msrc/components/topic-layout.test.ts[39m 4ms (unchanged)
[90msrc/components/topic-layout.ts[39m 5ms (unchanged)
[90msrc/components/TopicNode.tsx[39m 23ms (unchanged)
[90msrc/domain/graph.test.ts[39m 7ms (unchanged)
[90msrc/domain/graph.ts[39m 7ms (unchanged)
[90msrc/interaction-performance.css[39m 30ms (unchanged)
[90msrc/main.tsx[39m 2ms (unchanged)
[90msrc/stores/graph-store.test.ts[39m 17ms (unchanged)
[90msrc/stores/graph-store.ts[39m 41ms (unchanged)
[90msrc/stores/topic-actions.test.ts[39m 5ms (unchanged)
[90msrc/stores/topic-actions.ts[39m 6ms (unchanged)
[90msrc/styles.css[39m 59ms (unchanged)
[90msrc/theme.css[39m 9ms (unchanged)
[90mtsconfig.app.json[39m 1ms (unchanged)
[90mtsconfig.json[39m 1ms (unchanged)
[90mtsconfig.node.json[39m 1ms (unchanged)
[90mvite.config.ts[39m 2ms (unchanged)

````

Exit code: `0`

## Rustfmt write

```text
$ cargo fmt --manifest-path src-tauri/Cargo.toml --all

````

Exit code: `0`

## Prettier check

```text
$ prettier . --check
Checking formatting...
[[33mwarn[39m] .ci/cleanup-report.md
[[33mwarn[39m] Code style issues found in the above file. Run Prettier with --write to fix.
[ELIFECYCLE] Command failed with exit code 1.

```

Exit code: `1`

## ESLint check

```text
$ eslint . --max-warnings 0

Oops! Something went wrong! :(

ESLint: 10.7.0

TypeError: Key "rules": Key "react-refresh/only-export-components": Could not find "only-export-components" in plugin "react-refresh".
    at throwRuleNotFoundError (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/config.js:100:16)
    at Config.validateRulesConfig (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/config.js:691:5)
    at new Config (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/config.js:554:9)
    at [finalizeConfig] (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/config/flat-config-array.js:212:10)
    at FlatConfigArray.getConfigWithStatus (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@eslint+config-array@0.23.5/node_modules/@eslint/config-array/dist/cjs/index.cjs:1411:55)
    at FlatConfigArray.getConfig (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@eslint+config-array@0.23.5/node_modules/@eslint/config-array/dist/cjs/index.cjs:1429:15)
    at entryFilter (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/eslint@10.7.0/node_modules/eslint/lib/eslint/eslint-helpers.js:325:27)
    at async NodeHfs.<anonymous> (file:///home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@humanfs+core@0.19.2/node_modules/@humanfs/core/src/hfs.js:574:24)
    at async NodeHfs.<anonymous> (file:///home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@humanfs+core@0.19.2/node_modules/@humanfs/core/src/hfs.js:604:6)
    at async NodeHfs.walk (file:///home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/node_modules/.pnpm/@humanfs+core@0.19.2/node_modules/@humanfs/core/src/hfs.js:614:3)
[ELIFECYCLE] Command failed with exit code 2.

```

Exit code: `2`

## Web tests

```text
$ vitest run

[1m[30m[46m RUN [49m[39m[22m [36mv4.1.10 [39m[90m/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor[39m

 [32m✓[39m src/domain/graph.test.ts [2m([22m[2m7 tests[22m[2m)[22m[32m 7[2mms[22m[39m
 [32m✓[39m src/stores/graph-store.test.ts [2m([22m[2m6 tests[22m[2m)[22m[32m 9[2mms[22m[39m
 [32m✓[39m src/stores/topic-actions.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 8[2mms[22m[39m
 [32m✓[39m src/components/topic-layout.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m src/components/graph-presentation.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 4[2mms[22m[39m
 [32m✓[39m src/components/keyboard-shortcuts.test.ts [2m([22m[2m2 tests[22m[2m)[22m[32m 3[2mms[22m[39m

[2m Test Files [22m [1m[32m6 passed[39m[22m[90m (6)[39m
[2m      Tests [22m [1m[32m21 passed[39m[22m[90m (21)[39m
[2m   Start at [22m 15:24:08
[2m   Duration [22m 492ms[2m (transform 160ms, setup 0ms, import 570ms, tests 35ms, environment 1ms)[22m


```

Exit code: `0`

## Web build

```text
$ pnpm design:check && tsc -b && vite build
$ node scripts/check-design-tokens.mjs
Design token check passed.
[36mvite v8.1.5 [32mbuilding client environment for production...[36m[39m
[2K
transforming...✓ 1735 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.44 kB │ gzip:   0.28 kB
dist/assets/index-BTIre6rz.css   35.00 kB │ gzip:   6.62 kB
dist/assets/index-ZghxI-GO.js   391.52 kB │ gzip: 123.98 kB

[32m✓ built in 194ms[39m

```

Exit code: `0`

## Rustfmt check

```text
$ cargo fmt --manifest-path src-tauri/Cargo.toml --all -- --check

```

Exit code: `0`

## Clippy

```text
$ cargo clippy --manifest-path src-tauri/Cargo.toml --all-targets --all-features -- -D warnings
    Updating crates.io index
 Downloading crates ...
  Downloaded option-ext v0.2.0
  Downloaded markup5ever v0.38.0
  Downloaded adler2 v2.0.1
  Downloaded proc-macro-crate v1.3.1
  Downloaded siphasher v1.0.3
  Downloaded lock_api v0.4.14
  Downloaded new_debug_unreachable v1.0.6
  Downloaded pango-sys v0.18.0
  Downloaded pango v0.18.3
  Downloaded phf_codegen v0.13.1
  Downloaded phf_shared v0.13.1
  Downloaded scopeguard v1.2.0
  Downloaded string_cache_codegen v0.6.1
  Downloaded litemap v0.8.2
  Downloaded serde_spanned v1.1.1
  Downloaded serialize-to-javascript v0.1.2
  Downloaded ref-cast v1.0.26
  Downloaded phf_generator v0.13.1
  Downloaded log v0.4.33
  Downloaded soup3-sys v0.5.0
  Downloaded system-deps v6.2.2
  Downloaded sha2 v0.10.9
  Downloaded powerfmt v0.2.0
  Downloaded proc-macro-crate v2.0.2
  Downloaded tauri-winres v0.3.6
  Downloaded once_cell v1.21.4
  Downloaded percent-encoding v2.3.2
  Downloaded rustc-hash v2.1.3
  Downloaded semver v1.0.28
  Downloaded tauri-runtime v2.11.3
  Downloaded dirs v6.0.0
  Downloaded dyn-clone v1.0.20
  Downloaded miniz_oxide v0.8.9
  Downloaded plist v1.10.0
  Downloaded potential_utf v0.1.5
  Downloaded precomputed-hash v0.1.1
  Downloaded proc-macro-error v1.0.4
  Downloaded proc-macro-error-attr v1.0.4
  Downloaded raw-window-handle v0.6.2
  Downloaded serde-untagged v0.1.9
  Downloaded serialize-to-javascript-impl v0.1.2
  Downloaded tauri-macros v2.6.3
  Downloaded serde_spanned v0.6.9
  Downloaded gdkx11-sys v0.18.2
  Downloaded field-offset v0.3.6
  Downloaded memoffset v0.9.1
  Downloaded slab v0.4.12
  Downloaded stable_deref_trait v1.2.1
  Downloaded phf v0.13.1
  Downloaded phf_macros v0.13.1
  Downloaded strsim v0.11.1
  Downloaded same-file v1.0.6
  Downloaded mime v0.3.17
  Downloaded num-conv v0.2.2
  Downloaded parking_lot_core v0.9.12
  Downloaded ref-cast-impl v1.0.26
  Downloaded serde_derive_internals v0.29.1
  Downloaded dtoa-short v0.3.5
  Downloaded javascriptcore-rs-sys v1.1.1
  Downloaded pin-project-lite v0.2.17
  Downloaded pkg-config v0.3.33
  Downloaded toml_datetime v0.6.3
  Downloaded gdkwayland-sys v0.18.2
  Downloaded gdkx11 v0.18.2
  Downloaded generic-array v0.14.7
  Downloaded hex v0.4.3
  Downloaded ident_case v1.0.1
  Downloaded unic-char-property v0.9.0
  Downloaded dlopen2_derive v0.4.3
  Downloaded serde_repr v0.1.21
  Downloaded target-lexicon v0.12.16
  Downloaded gobject-sys v0.18.0
  Downloaded schemars_derive v0.8.22
  Downloaded string_cache v0.9.0
  Downloaded unic-char-range v0.9.0
  Downloaded unic-common v0.9.0
  Downloaded quote v1.0.47
  Downloaded simd-adler32 v0.3.10
  Downloaded synstructure v0.13.2
  Downloaded cpufeatures v0.2.17
  Downloaded crc32fast v1.5.0
  Downloaded crossbeam-utils v0.8.22
  Downloaded embed-resource v3.0.11
  Downloaded find-msvc-tools v0.1.9
  Downloaded json-patch v3.0.1
  Downloaded schemars v0.9.0
  Downloaded time-core v0.1.9
  Downloaded soup3 v0.5.0
  Downloaded tauri-codegen v2.6.3
  Downloaded chrono v0.4.45
  Downloaded servo_arc v0.4.3
  Downloaded tendril v0.5.1
  Downloaded parking_lot v0.12.5
  Downloaded tauri-build v2.6.3
  Downloaded serde_with_macros v3.21.0
  Downloaded shlex v2.0.1
  Downloaded smallvec v1.15.2
  Downloaded time-macros v0.2.32
  Downloaded alloc-no-stdlib v2.0.4
  Downloaded schemars v0.8.22
  Downloaded serde_core v1.0.229
  Downloaded serde_derive v1.0.229
  Downloaded zerofrom v0.1.8
  Downloaded proc-macro2 v1.0.107
  Downloaded version_check v0.9.5
  Downloaded writeable v0.6.3
  Downloaded socket2 v0.6.5
  Downloaded toml v1.1.3+spec-1.1.0
  Downloaded zerovec-derive v0.11.3
  Downloaded num-traits v0.2.19
  Downloaded tauri-runtime-wry v2.11.4
  Downloaded schemars v1.2.1
  Downloaded selectors v0.36.1
  Downloaded webkit2gtk-sys v2.0.2
  Downloaded cargo_toml v0.22.3
  Downloaded gdk v0.18.2
  Downloaded html5ever v0.38.0
  Downloaded icu_locale_core v2.2.0
  Downloaded muda v0.19.3
  Downloaded serde v1.0.229
  Downloaded version-compare v0.2.1
  Downloaded block-buffer v0.10.4
  Downloaded flate2 v1.1.9
  Downloaded unicode-ident v1.0.24
  Downloaded web_atoms v0.2.5
  Downloaded x11 v2.21.0
  Downloaded x11-dl v2.21.0
  Downloaded cfg-expr v0.15.8
  Downloaded memchr v2.8.3
  Downloaded png v0.17.16
  Downloaded uuid v1.24.0
  Downloaded walkdir v2.5.0
  Downloaded atk-sys v0.18.2
  Downloaded cairo-sys-rs v0.18.2
  Downloaded indexmap v1.9.3
  Downloaded mio v1.2.2
  Downloaded png v0.18.1
  Downloaded webkit2gtk v2.0.2
  Downloaded base64 v0.22.1
  Downloaded tauri-utils v2.9.3
  Downloaded serde_json v1.0.151
  Downloaded zerofrom-derive v0.1.7
  Downloaded autocfg v1.5.1
  Downloaded cargo-platform v0.1.9
  Downloaded zerovec v0.11.6
  Downloaded regex v1.13.1
  Downloaded winnow v0.5.40
  Downloaded zmij v1.0.23
  Downloaded cfb v0.7.3
  Downloaded serde_with v3.21.0
  Downloaded url v2.5.8
  Downloaded winnow v0.7.15
  Downloaded winnow v1.0.4
  Downloaded atk v0.18.2
  Downloaded quick-xml v0.41.0
  Downloaded syn v1.0.109
  Downloaded tauri v2.11.5
  Downloaded typenum v1.20.1
  Downloaded utf8_iter v1.0.4
  Downloaded wry v0.55.1
  Downloaded bitflags v1.3.2
  Downloaded bit-set v0.8.0
  Downloaded syn v2.0.119
  Downloaded time v0.3.54
  Downloaded alloc-stdlib v0.2.4
  Downloaded bs58 v0.5.1
  Downloaded cfg-if v1.0.4
  Downloaded syn v3.0.3
  Downloaded tao v0.35.3
  Downloaded unic-ucd-version v0.9.0
  Downloaded thiserror v1.0.69
  Downloaded cargo_metadata v0.19.2
  Downloaded camino v1.2.4
  Downloaded unic-ucd-ident v0.9.0
  Downloaded yoke-derive v0.8.2
  Downloaded bitflags v2.13.1
  Downloaded urlpattern v0.3.0
  Downloaded yoke v0.8.3
  Downloaded anyhow v1.0.104
  Downloaded cc v1.4.0
  Downloaded regex-syntax v0.8.11
  Downloaded zerotrie v0.2.4
  Downloaded byteorder v1.5.0
  Downloaded bytes v1.12.1
  Downloaded unicode-segmentation v1.13.3
  Downloaded aho-corasick v1.1.4
  Downloaded regex-automata v0.4.16
  Downloaded libc v0.2.189
  Downloaded crypto-common v0.1.7
  Downloaded glib-sys v0.18.1
  Downloaded toml_datetime v0.7.5+spec-1.1.0
  Downloaded javascriptcore-rs v1.1.2
  Downloaded hashbrown v0.12.3
  Downloaded gdk-pixbuf v0.18.5
  Downloaded icu_provider v2.2.0
  Downloaded iana-time-zone v0.1.65
  Downloaded itoa v1.0.18
  Downloaded digest v0.10.7
  Downloaded toml v0.9.12+spec-1.1.0
  Downloaded displaydoc v0.2.6
  Downloaded dlopen2 v0.8.2
  Downloaded http v1.4.2
  Downloaded tinyvec_macros v0.1.1
  Downloaded fdeflate v0.3.7
  Downloaded ctor v0.8.0
  Downloaded derive_more v2.1.1
  Downloaded icu_normalizer v2.2.0
  Downloaded toml v0.8.2
  Downloaded gtk3-macros v0.18.2
  Downloaded fnv v1.0.7
  Downloaded futures-macro v0.3.33
  Downloaded futures-sink v0.3.33
  Downloaded gtk-sys v0.18.2
  Downloaded libloading v0.7.4
  Downloaded dtor v0.3.0
  Downloaded fastrand v2.5.0
  Downloaded foldhash v0.2.0
  Downloaded thiserror v2.0.19
  Downloaded toml_edit v0.19.15
  Downloaded cookie v0.18.1
  Downloaded gio v0.18.4
  Downloaded brotli-decompressor v5.0.3
  Downloaded crossbeam-channel v0.5.16
  Downloaded icu_collections v2.2.0
  Downloaded ico v0.5.0
  Downloaded brotli v8.0.4
  Downloaded icu_normalizer_data v2.2.0
  Downloaded indexmap v2.14.0
  Downloaded libappindicator-sys v0.9.0
  Downloaded heck v0.4.1
  Downloaded darling v0.23.0
  Downloaded tinystr v0.8.3
  Downloaded toml_writer v1.1.2+spec-1.1.0
  Downloaded futures-core v0.3.33
  Downloaded tray-icon v0.24.1
  Downloaded idna v1.1.0
  Downloaded thiserror-impl v1.0.69
  Downloaded dunce v1.0.5
  Downloaded dom_query v0.27.0
  Downloaded keyboard-types v0.7.0
  Downloaded dbus v0.9.12
  Downloaded deranged v0.5.8
  Downloaded darling_core v0.23.0
  Downloaded cssparser-macros v0.6.1
  Downloaded ctor-proc-macro v0.0.7
  Downloaded equivalent v1.0.2
  Downloaded bit-vec v0.8.0
  Downloaded cssparser v0.36.0
  Downloaded dtor-proc-macro v0.0.6
  Downloaded futures-executor v0.3.33
  Downloaded idna_adapter v1.2.2
  Downloaded futures-channel v0.3.33
  Downloaded toml_edit v0.20.2
  Downloaded dpi v0.1.2
  Downloaded derive_more-impl v2.1.1
  Downloaded erased-serde v0.4.10
  Downloaded getrandom v0.3.4
  Downloaded heck v0.5.0
  Downloaded glob v0.3.4
  Downloaded jsonptr v0.6.3
  Downloaded cairo-rs v0.18.5
  Downloaded hashbrown v0.17.1
  Downloaded infer v0.19.0
  Downloaded form_urlencoded v1.2.2
  Downloaded gio-sys v0.18.1
  Downloaded thiserror-impl v2.0.19
  Downloaded gdk-sys v0.18.2
  Downloaded libappindicator v0.9.0
  Downloaded icu_properties_data v2.2.0
  Downloaded tinyvec v1.12.0
  Downloaded gdk-pixbuf-sys v0.18.0
  Downloaded futures-task v0.3.33
  Downloaded toml_datetime v1.1.1+spec-1.1.0
  Downloaded getrandom v0.4.3
  Downloaded futures-io v0.3.33
  Downloaded icu_properties v2.2.0
  Downloaded typeid v1.0.3
  Downloaded darling_macro v0.23.0
  Downloaded dtoa v1.0.11
  Downloaded toml_parser v1.1.2+spec-1.1.0
  Downloaded futures-util v0.3.33
  Downloaded gtk v0.18.2
  Downloaded dirs-sys v0.5.0
  Downloaded glib-macros v0.18.5
  Downloaded tokio v1.53.1
  Downloaded glib v0.18.5
  Downloaded libdbus-sys v0.2.7
  Downloaded rustc_version v0.4.1
   Compiling proc-macro2 v1.0.107
   Compiling unicode-ident v1.0.24
   Compiling quote v1.0.47
   Compiling serde_core v1.0.229
   Compiling serde v1.0.229
   Compiling smallvec v1.15.2
   Compiling equivalent v1.0.2
   Compiling hashbrown v0.17.1
   Compiling pkg-config v0.3.33
   Compiling indexmap v2.14.0
   Compiling syn v3.0.3
   Compiling syn v2.0.119
   Compiling winnow v0.5.40
   Compiling heck v0.5.0
   Compiling libc v0.2.189
   Compiling target-lexicon v0.12.16
   Compiling version-compare v0.2.1
   Compiling cfg-expr v0.15.8
   Compiling serde_derive v1.0.229
   Compiling version_check v0.9.5
   Compiling synstructure v0.13.2
   Compiling thiserror v1.0.69
   Compiling siphasher v1.0.3
   Compiling phf_shared v0.13.1
    Checking memchr v2.8.3
   Compiling fastrand v2.5.0
   Compiling zerofrom-derive v0.1.7
   Compiling yoke-derive v0.8.2
   Compiling zerovec-derive v0.11.3
   Compiling displaydoc v0.2.6
   Compiling thiserror-impl v1.0.69
   Compiling phf_generator v0.13.1
   Compiling stable_deref_trait v1.2.1
   Compiling icu_normalizer_data v2.2.0
   Compiling toml_datetime v0.6.3
   Compiling serde_spanned v0.6.9
   Compiling toml_edit v0.20.2
   Compiling icu_properties_data v2.2.0
   Compiling cfg-if v1.0.4
   Compiling zerofrom v0.1.8
   Compiling zmij v1.0.23
   Compiling autocfg v1.5.1
   Compiling yoke v0.8.3
   Compiling proc-macro-error-attr v1.0.4
   Compiling semver v1.0.28
   Compiling syn v1.0.109
   Compiling proc-macro-error v1.0.4
   Compiling zerovec v0.11.6
    Checking futures-core v0.3.33
    Checking pin-project-lite v0.2.17
   Compiling parking_lot_core v0.9.12
   Compiling toml v0.8.2
   Compiling phf_macros v0.13.1
   Compiling system-deps v6.2.2
   Compiling futures-macro v0.3.33
    Checking futures-task v0.3.33
    Checking slab v0.4.12
    Checking once_cell v1.21.4
   Compiling proc-macro-crate v2.0.2
   Compiling glib-sys v0.18.1
   Compiling gobject-sys v0.18.0
   Compiling gio-sys v0.18.1
   Compiling gdk-sys v0.18.2
    Checking futures-util v0.3.33
    Checking bitflags v2.13.1
   Compiling heck v0.4.1
   Compiling time-core v0.1.9
   Compiling num-conv v0.2.2
   Compiling typeid v1.0.3
   Compiling glib-macros v0.18.5
   Compiling cairo-sys-rs v0.18.2
   Compiling pango-sys v0.18.0
   Compiling gdk-pixbuf-sys v0.18.0
   Compiling tinystr v0.8.3
    Checking futures-channel v0.3.33
   Compiling rustc_version v0.4.1
   Compiling phf_codegen v0.13.1
   Compiling itoa v1.0.18
   Compiling strsim v0.11.1
   Compiling litemap v0.8.2
    Checking futures-executor v0.3.33
   Compiling thiserror v2.0.19
   Compiling writeable v0.6.3
   Compiling ident_case v1.0.1
   Compiling darling_core v0.23.0
   Compiling icu_locale_core v2.2.0
   Compiling atk-sys v0.18.2
   Compiling potential_utf v0.1.5
   Compiling zerotrie v0.2.4
   Compiling thiserror-impl v2.0.19
   Compiling utf8_iter v1.0.4
   Compiling erased-serde v0.4.10
    Checking glib v0.18.5
   Compiling icu_collections v2.2.0
   Compiling icu_provider v2.2.0
   Compiling scopeguard v1.2.0
   Compiling new_debug_unreachable v1.0.6
   Compiling lock_api v0.4.14
   Compiling darling_macro v0.23.0
   Compiling phf v0.13.1
   Compiling darling v0.23.0
   Compiling string_cache_codegen v0.6.1
   Compiling gio v0.18.4
   Compiling getrandom v0.4.3
   Compiling winnow v1.0.4
   Compiling anyhow v1.0.104
   Compiling precomputed-hash v0.1.1
   Compiling serde_json v1.0.151
   Compiling toml_parser v1.1.2+spec-1.1.0
   Compiling web_atoms v0.2.5
   Compiling icu_normalizer v2.2.0
   Compiling icu_properties v2.2.0
   Compiling parking_lot v0.12.5
   Compiling serde_with_macros v3.21.0
   Compiling gtk-sys v0.18.2
   Compiling serde_spanned v1.1.1
   Compiling ctor-proc-macro v0.0.7
   Compiling toml_writer v1.1.2+spec-1.1.0
    Checking futures-io v0.3.33
   Compiling idna_adapter v1.2.2
   Compiling string_cache v0.9.0
   Compiling percent-encoding v2.3.2
   Compiling dtoa v1.0.11
   Compiling log v0.4.33
   Compiling dtoa-short v0.3.5
   Compiling form_urlencoded v1.2.2
   Compiling uuid v1.24.0
   Compiling idna v1.1.0
   Compiling tendril v0.5.1
   Compiling selectors v0.36.1
   Compiling aho-corasick v1.1.4
   Compiling indexmap v1.9.3
   Compiling derive_more-impl v2.1.1
   Compiling cssparser-macros v0.6.1
   Compiling toml_datetime v1.1.1+spec-1.1.0
   Compiling regex-syntax v0.8.11
   Compiling camino v1.2.4
   Compiling unic-char-range v0.9.0
   Compiling alloc-no-stdlib v2.0.4
   Compiling byteorder v1.5.0
   Compiling unic-common v0.9.0
   Compiling unic-ucd-version v0.9.0
   Compiling alloc-stdlib v0.2.4
   Compiling unic-char-property v0.9.0
   Compiling derive_more v2.1.1
   Compiling toml v1.1.3+spec-1.1.0
   Compiling cssparser v0.36.0
   Compiling regex-automata v0.4.16
   Compiling markup5ever v0.38.0
   Compiling url v2.5.8
   Compiling memoffset v0.9.1
   Compiling servo_arc v0.4.3
   Compiling serde_derive_internals v0.29.1
   Compiling schemars v0.8.22
   Compiling deranged v0.5.8
   Compiling rustc-hash v2.1.3
   Compiling powerfmt v0.2.0
   Compiling hashbrown v0.12.3
   Compiling fnv v1.0.7
   Compiling bit-vec v0.8.0
   Compiling bit-set v0.8.0
   Compiling cfb v0.7.3
   Compiling time v0.3.54
   Compiling regex v1.13.1
   Compiling schemars_derive v0.8.22
   Compiling html5ever v0.38.0
   Compiling brotli-decompressor v5.0.3
   Compiling unic-ucd-ident v0.9.0
    Checking cairo-rs v0.18.5
   Compiling jsonptr v0.6.3
   Compiling field-offset v0.3.6
   Compiling quick-xml v0.41.0
   Compiling toml_edit v0.19.15
   Compiling cargo-platform v0.1.9
   Compiling foldhash v0.2.0
   Compiling dunce v1.0.5
   Compiling bytes v1.12.1
    Checking pango v0.18.3
    Checking gdk-pixbuf v0.18.5
   Compiling base64 v0.22.1
   Compiling dyn-clone v1.0.20
   Compiling same-file v1.0.6
   Compiling walkdir v2.5.0
   Compiling proc-macro-crate v1.3.1
   Compiling plist v1.10.0
    Checking gdk v0.18.2
   Compiling http v1.4.2
   Compiling dom_query v0.27.0
   Compiling cargo_metadata v0.19.2
   Compiling json-patch v3.0.1
   Compiling brotli v8.0.4
   Compiling urlpattern v0.3.0
   Compiling serde-untagged v0.1.9
   Compiling infer v0.19.0
   Compiling ctor v0.8.0
   Compiling serde_with v3.21.0
   Compiling javascriptcore-rs-sys v1.1.1
   Compiling soup3-sys v0.5.0
   Compiling generic-array v0.14.7
   Compiling gtk v0.18.2
   Compiling find-msvc-tools v0.1.9
   Compiling shlex v2.0.1
   Compiling glob v0.3.4
   Compiling cc v1.4.0
   Compiling gtk3-macros v0.18.2
   Compiling tauri-utils v2.9.3
    Checking atk v0.18.2
   Compiling time-macros v0.2.32
   Compiling webkit2gtk-sys v2.0.2
   Compiling toml_datetime v0.7.5+spec-1.1.0
   Compiling x11 v2.21.0
   Compiling typenum v1.20.1
   Compiling winnow v0.7.15
   Compiling crc32fast v1.5.0
   Compiling option-ext v0.2.0
   Compiling simd-adler32 v0.3.10
   Compiling dirs-sys v0.5.0
   Compiling toml v0.9.12+spec-1.1.0
   Compiling embed-resource v3.0.11
   Compiling gdkx11-sys v0.18.2
   Compiling adler2 v2.0.1
   Compiling crossbeam-utils v0.8.22
    Checking bitflags v1.3.2
   Compiling miniz_oxide v0.8.9
   Compiling tauri-winres v0.3.6
   Compiling cargo_toml v0.22.3
   Compiling dirs v6.0.0
    Checking dpi v0.1.2
   Compiling cookie v0.18.1
   Compiling libdbus-sys v0.2.7
   Compiling x11-dl v2.21.0
   Compiling tauri-build v2.6.3
   Compiling flate2 v1.1.9
    Checking javascriptcore-rs v1.1.2
    Checking soup3 v0.5.0
   Compiling crypto-common v0.1.7
   Compiling block-buffer v0.10.4
   Compiling fdeflate v0.3.7
    Checking raw-window-handle v0.6.2
   Compiling png v0.17.16
   Compiling digest v0.10.7
    Checking crossbeam-channel v0.5.16
   Compiling dlopen2_derive v0.4.3
   Compiling cpufeatures v0.2.17
   Compiling tauri-runtime v2.11.3
   Compiling wry v0.55.1
   Compiling sha2 v0.10.9
    Checking webkit2gtk v2.0.2
    Checking dlopen2 v0.8.2
    Checking dbus v0.9.12
   Compiling ico v0.5.0
   Compiling tauri v2.11.5
    Checking gdkx11 v0.18.2
    Checking gdkwayland-sys v0.18.2
   Compiling tauri-runtime-wry v2.11.4
   Compiling getrandom v0.3.4
    Checking unicode-segmentation v1.13.3
    Checking tao v0.35.3
    Checking keyboard-types v0.7.0
   Compiling tauri-codegen v2.6.3
   Compiling serialize-to-javascript-impl v0.1.2
    Checking serialize-to-javascript v0.1.2
    Checking muda v0.19.3
   Compiling prerequisite-dag-editor v0.1.0 (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/src-tauri)
    Checking tokio v1.53.1
   Compiling tauri-macros v2.6.3
   Compiling serde_repr v0.1.21
    Checking mime v0.3.17
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 08s

```

Exit code: `0`

## Rust tests

```text
$ cargo test --manifest-path src-tauri/Cargo.toml --all-features
   Compiling hashbrown v0.17.1
   Compiling equivalent v1.0.2
   Compiling heck v0.5.0
   Compiling libc v0.2.189
   Compiling memchr v2.8.3
   Compiling zerofrom v0.1.8
   Compiling serde_core v1.0.229
   Compiling indexmap v2.14.0
   Compiling siphasher v1.0.3
   Compiling cfg-if v1.0.4
   Compiling litemap v0.8.2
   Compiling writeable v0.6.3
   Compiling thiserror v1.0.69
   Compiling phf_shared v0.13.1
   Compiling utf8_iter v1.0.4
   Compiling toml_edit v0.20.2
   Compiling itoa v1.0.18
   Compiling phf_generator v0.13.1
   Compiling smallvec v1.15.2
   Compiling icu_properties_data v2.2.0
   Compiling icu_normalizer_data v2.2.0
   Compiling yoke v0.8.3
   Compiling once_cell v1.21.4
   Compiling zerovec v0.11.6
   Compiling zmij v1.0.23
   Compiling futures-core v0.3.33
   Compiling pin-project-lite v0.2.17
   Compiling phf_macros v0.13.1
   Compiling slab v0.4.12
   Compiling futures-task v0.3.33
   Compiling futures-util v0.3.33
   Compiling bitflags v2.13.1
   Compiling num-conv v0.2.2
   Compiling time-core v0.1.9
   Compiling stable_deref_trait v1.2.1
   Compiling scopeguard v1.2.0
   Compiling winnow v1.0.4
   Compiling lock_api v0.4.14
   Compiling toml v0.8.2
   Compiling proc-macro-crate v2.0.2
   Compiling system-deps v6.2.2
   Compiling toml_parser v1.1.2+spec-1.1.0
   Compiling glib-macros v0.18.5
   Compiling glib-sys v0.18.1
   Compiling gobject-sys v0.18.0
   Compiling gio-sys v0.18.1
   Compiling gdk-sys v0.18.2
   Compiling futures-executor v0.3.33
   Compiling cairo-sys-rs v0.18.2
   Compiling pango-sys v0.18.0
   Compiling gdk-pixbuf-sys v0.18.0
   Compiling tinystr v0.8.3
   Compiling futures-channel v0.3.33
   Compiling phf_codegen v0.13.1
   Compiling powerfmt v0.2.0
   Compiling toml_writer v1.1.2+spec-1.1.0
   Compiling deranged v0.5.8
   Compiling icu_locale_core v2.2.0
   Compiling atk-sys v0.18.2
   Compiling potential_utf v0.1.5
   Compiling zerotrie v0.2.4
   Compiling byteorder v1.5.0
   Compiling glib v0.18.5
   Compiling log v0.4.33
   Compiling icu_provider v2.2.0
   Compiling icu_collections v2.2.0
   Compiling typeid v1.0.3
   Compiling aho-corasick v1.1.4
   Compiling unic-char-range v0.9.0
   Compiling fnv v1.0.7
   Compiling unic-common v0.9.0
   Compiling regex-syntax v0.8.11
   Compiling unic-ucd-version v0.9.0
   Compiling unic-char-property v0.9.0
   Compiling thiserror v2.0.19
   Compiling serde v1.0.229
   Compiling phf v0.13.1
   Compiling parking_lot_core v0.9.12
   Compiling string_cache_codegen v0.6.1
   Compiling regex-automata v0.4.16
   Compiling bytes v1.12.1
   Compiling alloc-no-stdlib v2.0.4
   Compiling alloc-stdlib v0.2.4
   Compiling web_atoms v0.2.5
   Compiling parking_lot v0.12.5
   Compiling unic-ucd-ident v0.9.0
   Compiling icu_properties v2.2.0
   Compiling regex v1.13.1
   Compiling icu_normalizer v2.2.0
   Compiling gtk-sys v0.18.2
   Compiling quick-xml v0.41.0
   Compiling serde_spanned v1.1.1
   Compiling base64 v0.22.1
   Compiling futures-io v0.3.33
   Compiling gio v0.18.4
   Compiling idna_adapter v1.2.2
   Compiling string_cache v0.9.0
   Compiling getrandom v0.4.3
   Compiling brotli-decompressor v5.0.3
   Compiling serde_json v1.0.151
   Compiling http v1.4.2
   Compiling dunce v1.0.5
   Compiling same-file v1.0.6
   Compiling ctor v0.8.0
   Compiling form_urlencoded v1.2.2
   Compiling walkdir v2.5.0
   Compiling brotli v8.0.4
   Compiling uuid v1.24.0
   Compiling idna v1.1.0
   Compiling anyhow v1.0.104
   Compiling selectors v0.36.1
   Compiling toml_datetime v1.1.1+spec-1.1.0
   Compiling glob v0.3.4
   Compiling toml v1.1.3+spec-1.1.0
   Compiling cssparser v0.36.0
   Compiling markup5ever v0.38.0
   Compiling url v2.5.8
   Compiling bitflags v1.3.2
   Compiling html5ever v0.38.0
   Compiling cfb v0.7.3
   Compiling jsonptr v0.6.3
   Compiling cairo-rs v0.18.5
   Compiling erased-serde v0.4.10
   Compiling time v0.3.54
   Compiling toml_edit v0.19.15
   Compiling option-ext v0.2.0
   Compiling dirs-sys v0.5.0
   Compiling dom_query v0.27.0
   Compiling plist v1.10.0
   Compiling proc-macro-crate v1.3.1
   Compiling schemars v0.8.22
   Compiling cargo_metadata v0.19.2
   Compiling serde-untagged v0.1.9
   Compiling json-patch v3.0.1
   Compiling gdk-pixbuf v0.18.5
   Compiling pango v0.18.3
   Compiling infer v0.19.0
   Compiling memoffset v0.9.1
   Compiling urlpattern v0.3.0
   Compiling gdk v0.18.2
   Compiling serde_with v3.21.0
   Compiling soup3-sys v0.5.0
   Compiling javascriptcore-rs-sys v1.1.1
   Compiling percent-encoding v2.3.2
   Compiling gtk v0.18.2
   Compiling field-offset v0.3.6
   Compiling gtk3-macros v0.18.2
   Compiling dirs v6.0.0
   Compiling atk v0.18.2
   Compiling webkit2gtk-sys v2.0.2
   Compiling time-macros v0.2.32
   Compiling tauri-utils v2.9.3
   Compiling toml v0.9.12+spec-1.1.0
   Compiling embed-resource v3.0.11
   Compiling gdkx11-sys v0.18.2
   Compiling tauri-winres v0.3.6
   Compiling x11 v2.21.0
   Compiling cargo_toml v0.22.3
   Compiling crc32fast v1.5.0
   Compiling dpi v0.1.2
   Compiling flate2 v1.1.9
   Compiling tauri-build v2.6.3
   Compiling crossbeam-utils v0.8.22
   Compiling javascriptcore-rs v1.1.2
   Compiling soup3 v0.5.0
   Compiling raw-window-handle v0.6.2
   Compiling png v0.17.16
   Compiling crossbeam-channel v0.5.16
   Compiling cookie v0.18.1
   Compiling libdbus-sys v0.2.7
   Compiling x11-dl v2.21.0
   Compiling semver v1.0.28
   Compiling sha2 v0.10.9
   Compiling wry v0.55.1
   Compiling dlopen2 v0.8.2
   Compiling tauri v2.11.5
   Compiling dbus v0.9.12
   Compiling ico v0.5.0
   Compiling gdkx11 v0.18.2
   Compiling gdkwayland-sys v0.18.2
   Compiling unicode-segmentation v1.13.3
   Compiling keyboard-types v0.7.0
   Compiling webkit2gtk v2.0.2
   Compiling tao v0.35.3
   Compiling tauri-codegen v2.6.3
   Compiling tauri-runtime v2.11.3
   Compiling serialize-to-javascript v0.1.2
   Compiling tauri-runtime-wry v2.11.4
   Compiling tauri-macros v2.6.3
   Compiling getrandom v0.3.4
   Compiling muda v0.19.3
   Compiling prerequisite-dag-editor v0.1.0 (/home/runner/work/prerequisite-dag-editor/prerequisite-dag-editor/src-tauri)
   Compiling tokio v1.53.1
   Compiling mime v0.3.17
    Finished `test` profile [unoptimized + debuginfo] target(s) in 1m 05s
     Running unittests src/lib.rs (src-tauri/target/debug/deps/prerequisite_dag_editor_lib-59114ab9746b8448)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/main.rs (src-tauri/target/debug/deps/prerequisite_dag_editor-93253f57b27e66ab)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests prerequisite_dag_editor_lib

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

Exit code: `0`

## Git diff summary

```text
 pnpm-lock.yaml                            | 1124 +++++++++++++++++++++++++++++
 scripts/check-changed-format.mjs          |    8 +-
 scripts/check-design-tokens.mjs           |    4 +-
 src-tauri/gen/schemas/windows-schema.json |   54 +-
 src/App.tsx                               |   48 +-
 src/components/GlobalShortcuts.tsx        |    4 +-
 src/components/TopicNode.tsx              |    9 +-
 src/components/graph-presentation.test.ts |   10 +-
 src/components/status-meta.ts             |    5 +-
 src/components/topic-layout.test.ts       |    8 +-
 src/components/topic-layout.ts            |    9 +-
 src/interaction-performance.css           |    3 +-
 src/stores/graph-store.test.ts            |   23 +-
 src/stores/graph-store.ts                 |   12 +-
 src/stores/topic-actions.test.ts          |    4 +-
 src/stores/topic-actions.ts               |    5 +-
 src/styles.css                            |   24 +-
 src/theme.css                             |    5 +-
 tsconfig.json                             |    5 +-
 19 files changed, 1217 insertions(+), 147 deletions(-)

```

Exit code: `0`
