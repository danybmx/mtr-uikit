Package.describe({
  name: 'danybmx:mtr-uikit',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'UIKit 2.23.0',
  // URL to the Git repository containing the source code for this package.
  git: 'https://gitlab.com/danybmx/mtr-uikit.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');

  // Paths
  var path = Npm.require('path');
  var asset_path = path.join('uikit');
  var js_asset_path = path.join(asset_path, 'js');
  var css_asset_path = path.join(asset_path, 'css');
  var fonts_asset_path = path.join(asset_path, 'fonts');

  // CSS
  api.add_files(path.join(asset_path, 'css', 'uikit.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'accordion.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'autocomplete.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'datepicker.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'dotnav.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'form-advanced.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'form-file.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'form-password.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'form-select.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'htmleditor.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'nestable.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'notify.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'placeholder.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'progress.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'search.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'slidenav.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'slider.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'slideshow.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'sortable.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'sticky.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'tooltip.css'), 'client');
  api.add_files(path.join(css_asset_path, 'components', 'upload.css'), 'client');

  // JS
  ai.add_files(path.join(asset_path, 'js', 'uikit.js'), 'client');

  api.add_files(path.join(js_asset_path, 'core', 'alert.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'button.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'core.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'cover.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'dropdown.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'grid.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'modal.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'nav.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'offcanvas.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'scrollspy.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'smooth-scroll.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'switcher.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'tab.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'toggle.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'touch.js'), 'client');
  api.add_files(path.join(js_asset_path, 'core', 'utility.js'), 'client');

  api.add_files(path.join(js_asset_path, 'components', 'accordion.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'autocomplete.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'datepicker.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'form-password.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'form-select.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'grid.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'htmleditor.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'lightbox.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'nestable.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'notify.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'pagination.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'search.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'slideshow.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'slideshow-fx.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'sortable.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'sticky.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'timepicker.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'tooltip.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'upload.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'parallax.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'slider.js'), 'client');
  api.add_files(path.join(js_asset_path, 'components', 'slideset.js'), 'client');

  // Fonts
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.eot'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.ttf'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.woff'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.woff2'), 'client');
  api.add_files(path.join(asset_path, 'fonts', 'FontAwesome.otf'), 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('danybmx:uikit');
  api.addFiles('uikit-tests.js');
});