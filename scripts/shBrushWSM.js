SyntaxHighlighter.brushes.wsm = function () {
    this.regexList = [
        { regex: /&lt;%([^!])+?%&gt;/gm, css: 'wsm-placeholder' },
        { regex: /&lt;!(\/?)IoRange(.+?)&gt;/gm, css: 'wsm-blockmark' },
        { regex: /&lt;!IoRedDot(.+?)&gt;/gm, css: 'wsm-smartedit' },
        { regex: /&lt;%!!(.+?)!!%&gt;/gm, css: 'wsm-rendertag-short' },
        { regex: /&lt;(\/?)reddot:cms&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;navigation(.*?)&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)output(.*?)&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)foreach(.*?)&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)if&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)query(.*?)&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)htmltext&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)xmltext&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)currentPageCommentCount(.*?)&gt;/gm, css: 'wsm-rendertag' },
        { regex: /&lt;(\/?)pagesMostCommented(.*?)&gt;/gm, css: 'wsm-rendertag' }
    ];
};
SyntaxHighlighter.brushes.wsm.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.wsm.aliases = ['wsm','ms'];