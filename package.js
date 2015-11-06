Package.describe({
  name: 'danybmx:mtr-uikit',
  version: '0.0.1',

  // Brief, one-line summary of the package.
  summary: 'UIKit 2.23.0',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/danybmx/mtr-uikit.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  // Paths
  var path = Npm.require('path');
  var assetPath = path.join('uikit');
  var jsAssetPath = path.join(assetPath, 'js');
  var cssAssetPath = path.join(assetPath, 'css');
  var fontsAssetPath = path.join(assetPath, 'fonts');

  // CSS
  api.addFiles(path.join(assetPath, 'css', 'uikit.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'accordion.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'autocomplete.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'datepicker.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'dotnav.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'form-advanced.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'form-file.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'form-password.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'form-select.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'htmleditor.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'nestable.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'notify.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'placeholder.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'progress.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'search.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'slidenav.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'slider.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'slideshow.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'sortable.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'sticky.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'tooltip.css'), 'client');
  api.addFiles(path.join(cssAssetPath, 'components', 'upload.css'), 'client');

  // JS
  api.addFiles(path.join(assetPath, 'js', 'uikit.js'), 'client');

  api.addFiles(path.join(jsAssetPath, 'core', 'alert.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'button.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'core.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'cover.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'dropdown.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'grid.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'modal.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'nav.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'offcanvas.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'scrollspy.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'smooth-scroll.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'switcher.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'tab.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'toggle.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'touch.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'core', 'utility.js'), 'client');

  api.addFiles(path.join(jsAssetPath, 'components', 'accordion.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'autocomplete.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'datepicker.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'form-password.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'form-select.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'grid.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'htmleditor.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'lightbox.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'nestable.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'notify.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'pagination.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'search.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'slideshow.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'slideshow-fx.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'sortable.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'sticky.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'timepicker.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'tooltip.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'upload.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'parallax.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'slider.js'), 'client');
  api.addFiles(path.join(jsAssetPath, 'components', 'slideset.js'), 'client');

  // Fonts
  api.addAssets(path.join(assetPath, 'fonts', 'fontawesome-webfont.ttf'), 'client');
  api.addAssets(path.join(assetPath, 'fonts', 'fontawesome-webfont.woff'), 'client');
  api.addAssets(path.join(assetPath, 'fonts', 'fontawesome-webfont.woff2'), 'client');
  api.addAssets(path.join(assetPath, 'fonts', 'FontAwesome.otf'), 'client');
});

Package.onTest(function(api) {
  /**
  api.use('ecmascript');
  api.use('tinytest');
  api.use('danybmx:uikit');
  api.addFiles('uikit-tests.js');
  **/
});
