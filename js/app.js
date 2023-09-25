var search = new Filter('search', 'data-caption');

baguetteBox.run('.gallery'){
        captions: true,
        buttons: 'auto',
        fullScreen: false,
        noScrollbars: false,
        titleTag: true,
        async: false,
        preload: 2,
        animation: 'fadeIn',
        onChange: null,
        overlayBackgroundColor: 'rgba(113,117,115,0.8)'
    };

