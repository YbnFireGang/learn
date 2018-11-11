function htmlHelp() {
}

function formatHtml(data) {
  const {assets} = data;
  let jsFile = assets.js.join('');
  let cssFile = assets.css.join('');
  let {html} = data;
  html = html.replace(`<!--injectjs-->`, `<script src="${jsFile}"></script>`);
  html = html.replace(`<!--injectcss-->`, `<link rel="stylesheet" href="${cssFile}">`);
  html = html.replace(`component:`, `../../webapp/component/`);
  return html;
}

htmlHelp.prototype.apply = function (compiler) {
  compiler.plugin('compilation', (compilation) => {
    compilation.plugin(
      'html-webpack-plugin-before-html-processing',
      data => {
        data.html = formatHtml(data);
      }
    )
  })
};

module.exports = htmlHelp;
