app.directive("myFaIconPicker", function() { 
	return { 
		restrict: "E", 
		scope: { 
			myItem: "=",
		},
		controller :function MyFaIconPickerController($scope) {
			
			//Font Awesome icons
			$scope.elem = [
				{"name" : "fa-glass","value" : "fa-glass"}  ,{"name" : "fa-music","value" : "fa-music"}  ,{"name" : "fa-search","value" : "fa-search"}  ,{"name" : "fa-envelope-o","value" : "fa-envelope-o"}  ,{"name" : "fa-heart","value" : "fa-heart"}  ,{"name" : "fa-star","value" : "fa-star"}  ,{"name" : "fa-star-o ","value" : "fa-star-o"}  ,{"name" : "fa-user","value" : "fa-user"}  ,{"name" : "fa-film","value" : "fa-film"}  ,{"name" : "fa-th-large","value" : "fa-th-large"}  ,{"name" : "fa-th","value" : "fa-th"}  ,{"name" : "fa-th-list","value" : "fa-th-list"}  ,{"name" : "fa-check","value" : "fa-check"}  ,{"name" : "fa-times","value" : "fa-times"}  ,{"name" : "fa-search-plus","value" : "fa-search-plus"}  ,{"name" : "fa-search-minus","value" : "fa-search-minus"}  ,{"name" : "fa-power-off","value" : "fa-power-off"}  ,{"name" : "fa-signal","value" : "fa-signal"}  ,{"name" : "fa-cog","value" : "fa-cog"}  ,{"name" : "fa-trash-o","value" : "fa-trash-o"}  ,{"name" : "fa-home","value" : "fa-home"}  ,{"name" : "fa-file-o","value" : "fa-file-o"}  ,{"name" : "fa-clock-o","value" : "fa-clock-o"}  ,{"name" : "fa-road","value" : "fa-road"}  ,{"name" : "fa-download","value" : "fa-download"}  ,{"name" : "fa-arrow-circle-o-down","value" : "fa-arrow-circle-o-down"}  ,{"name" : "fa-arrow-circle-o-up","value" : "fa-arrow-circle-o-up"}  ,{"name" : "fa-arrow-circle-o-up","value" : "fa-arrow-circle-o-up"}  ,{"name" : "fa-play-circle-o","value" : "fa-play-circle-o"}  ,{"name" : "fa-repeat","value" : "fa-repeat"}  ,{"name" : "fa-refresh","value" : "fa-refresh"}  ,{"name" : "fa-list-alt","value" : "fa-list-alt"} ,{"name" : "fa-lock","value" : "fa-lock"}  ,{"name" : "fa-flag","value" : "fa-flag"}  ,{"name" : "fa-headphones","value" : "fa-headphones"}  ,{"name" : "fa-volume-off","value" : "fa-volume-off"}  ,{"name" : "fa-volume-down","value" : "fa-volume-down"}  ,{"name" : "fa-volume-up","value" : "fa-volume-up"}  ,{"name" : "fa-qrcode","value" : "fa-qrcode"}  ,{"name" : "fa-barcode","value" : "fa-barcode"}  ,{"name" : "fa-tag","value" : "fa-tag"}  ,{"name" : "fa-tags","value" : "fa-tags"}  ,{"name" : "fa-book","value" : "fa-book"}  ,{"name" : "fa-bookmark","value" : "fa-bookmark"}  ,{"name" : "fa-print","value" : "fa-print"}  ,{"name" : "fa-camera","value" : "fa-camera"}  ,{"name" : "fa-font","value" : "fa-font"}  ,{"name" : "fa-bold","value" : "fa-bold"}  ,{"name" : "fa-italic","value" : "fa-italic"}  ,{"name" : "fa-text-height","value" : "fa-text-height"}  ,{"name" : "fa-text-width","value" : "fa-text-width"}  ,{"name" : "fa-align-left","value" : "fa-align-left"}  ,{"name" : "fa-align-center","value" : "fa-align-center"}  ,{"name" : "fa-align-right","value" : "fa-align-right"}  ,{"name" : "fa-align-justify","value" : "fa-align-justify"}  ,{"name" : "fa-list","value" : "fa-list"}  ,{"name" : "fa-outdent","value" : "fa-outdent"}  ,{"name" : "fa-indent","value" : "fa-indent"}  ,{"name" : "fa-video-camera","value" : "fa-video-camera"}  ,{"name" : "fa-picture-o","value" : "fa-picture-o"}  ,{"name" : "fa-pencil","value" : "fa-pencil"}  ,{"name" : "fa-map-marker","value" : "fa-map-marker"}  ,{"name" : "fa-adjust","value" : "fa-adjust"}  ,{"name" : "fa-tint","value" : "fa-tint"}  ,{"name" : "fa-pencil-square-o","value" : "fa-pencil-square-o"}  ,{"name" : "fa-share-square-o","value" : "fa-share-square-o"}  ,{"name" : "fa-check-square-o","value" : "fa-check-square-o"}  ,{"name" : "fa-arrows ","value" : "fa-arrows"}  ,{"name" : "fa-step-backward","value" : "fa-step-backward"}  ,{"name" : "fa-fast-backward","value" : "fa-fast-backward"}  ,{"name" : "fa-backward ","value" : "fa-backward"}  ,{"name" : "fa-play","value" : "fa-play"}  ,{"name" : "fa-pause","value" : "fa-pause"}  ,{"name" : "fa-stop","value" : "fa-stop"}  ,{"name" : "fa-forward","value" : "fa-forward"}  ,{"name" : "fa-fast-forward","value" : "fa-fast-forward"}  ,{"name" : "fa-step-forward","value" : "fa-step-forward"}  ,{"name" : "fa-eject","value" : "fa-eject"}  ,{"name" : "fa-chevron-left","value" : "fa-chevron-left"}  ,{"name" : "fa-chevron-right","value" : "fa-chevron-right"}  ,{"name" : "fa-plus-circle","value" : "fa-plus-circle"}  ,{"name" : "fa-minus-circle","value" : "fa-minus-circle"}  ,{"name" : "fa-times-circle","value" : "fa-times-circle"}  ,{"name" : "fa-check-circle","value" : "fa-check-circle"}  ,{"name" : "fa-question-circle","value" : "fa-question-circle"}  ,{"name" : "fa-info-circle","value" : "fa-info-circle"}  ,{"name" : "fa-crosshairs","value" : "fa-crosshairs"}  ,{"name" : "fa-times-circle-o","value" : "fa-times-circle-o"}  ,{"name" : "fa-check-circle-o","value" : "fa-check-circle-o"}  ,{"name" : "fa-ban","value" : "fa-ban"}  ,{"name" : "fa-arrow-left","value" : "fa-arrow-left"}  ,{"name" : "fa-arrow-right","value" : "fa-arrow-right"}  ,{"name" : "fa-arrow-up","value" : "fa-arrow-up"}  ,{"name" : "fa-arrow-down","value" : "fa-arrow-down"}  ,{"name" : "fa-share","value" : "fa-share"}  ,{"name" : "fa-expand","value" : "fa-expand"}  ,{"name" : "fa-compress","value" : "fa-compress"}  ,{"name" : "fa-plus","value" : "fa-plus"}  ,{"name" : "fa-minus","value" : "fa-minus"}  ,{"name" : "fa-asterisk","value" : "fa-asterisk"}  ,{"name" : "fa-exclamation-circle","value" : "fa-exclamation-circle"}  ,{"name" : "fa-gift","value" : "fa-gift"}  ,{"name" : "fa-leaf","value" : "fa-leaf"}  ,{"name" : "fa-fire","value" : "fa-fire"}  ,{"name" : "fa-eye","value" : "fa-eye"}  ,{"name" : "fa-eye-slash","value" : "fa-eye-slash"}  ,{"name" : "fa-exclamation-triangle","value" : "fa-exclamation-triangle"}  ,{"name" : "fa-plane","value" : "fa-plane"}  ,{"name" : "fa-calendar","value" : "fa-calendar"}  ,{"name" : "fa-random","value" : "fa-random"}  ,{"name" : "fa-comment","value" : "fa-comment"}  ,{"name" : "fa-magnet","value" : "fa-magnet"}  ,{"name" : "fa-chevron-up","value" : "fa-chevron-up"}  ,{"name" : "fa-chevron-down","value" : "fa-chevron-down"}  ,{"name" : "fa-retweet","value" : "fa-retweet"}  ,{"name" : "fa-fa-shopping-cart","value" : "fa-shopping-cart"}  ,{"name" : "fa-folder","value" : "fa-folder"}  ,{"name" : "fa-folder-open","value" : "fa-folder-open"}  ,{"name" : "fa-fa-arrows-v","value" : "fa-arrows-v"}  ,{"name" : "fa-fa-arrows-h","value" : "fa-arrows-h"}  ,{"name" : "fa-bar-chart","value" : "fa-bar-chart"}  ,{"name" : "fa-twitter-square","value" : "fa-twitter-square"}  ,{"name" : "fa-facebook-square","value" : "fa-facebook-square"}  ,{"name" : "fa-camera-retro","value" : "fa-camera-retro"}  ,{"name" : "fa-key","value" : "fa-key"}  ,{"name" : "fa-cogs","value" : "fa-cogs"}  ,{"name" : "fa-comments","value" : "fa-comments"}  ,{"name" : "fa-thumbs-o-up","value" : "fa-thumbs-o-up"}  ,{"name" : "fa-thumbs-o-down","value" : "fa-thumbs-o-down"}  ,{"name" : "fa-star-half","value" : "fa-star-half"}  ,{"name" : "fa-heart-o","value" : "fa-heart-o"}  ,{"name" : "fa-sign-out","value" : "fa-sign-out"}  ,{"name" : "fa-linkedin-square","value" : "fa-linkedin-square"}  ,{"name" : "fa-thumb-tack","value" : "fa-thumb-tack"}  ,{"name" : "fa-external-link","value" : "fa-external-link"}  ,{"name" : "fa-sign-in","value" : "fa-sign-in"}  ,{"name" : "fa-trophy","value" : "fa-trophy"}  ,{"name" : "fa-github-square","value" : "fa-github-square"}  ,{"name" : "fa-upload","value" : "fa-upload"}  ,{"name" : "fa-lemon-o","value" : "fa-lemon-o"}  ,{"name" : "fa-phone","value" : "fa-phone"}  ,{"name" : "fa-square-o","value" : "fa-square-o"}  ,{"name" : "fa-bookmark-o","value" : "fa-bookmark-o"}  ,{"name" : "fa-phone-square","value" : "fa-phone-square"}  ,{"name" : "fa-twitter","value" : "fa-twitter"}  ,{"name" : "fa-facebook","value" : "fa-facebook"}  ,{"name" : "fa-github","value" : "fa-github"}  ,{"name" : "fa-unlock","value" : "fa-unlock"}  ,{"name" : "fa-credit-card","value" : "fa-credit-card"}  ,{"name" : "fa-rss","value" : "fa-rss"}  ,{"name" : "fa-hdd-o","value" : "fa-hdd-o"}  ,{"name" : "fa-bullhorn","value" : "fa-bullhorn"}  ,{"name" : "fa-bell","value" : "fa-bell"}  ,{"name" : "fa-certificate","value" : "fa-certificate"}  ,{"name" : "fa-hand-o-right","value" : "fa-hand-o-right"}  ,{"name" : "fa-hand-o-left","value" : "fa-hand-o-left"}  ,{"name" : "fa-hand-o-up","value" : "fa-hand-o-up"}  ,{"name" : "fa-hand-o-down","value" : "fa-hand-o-down"} ,{"name" : "fa-arrow-circle-left","value" : "fa-arrow-circle-left"}  ,{"name" : "fa-arrow-circle-right","value" : "fa-arrow-circle-right"}  ,{"name" : "fa-arrow-circle-up","value" : "fa-arrow-circle-up"}  ,{"name" : "fa-arrow-circle-down","value" : "fa-arrow-circle-down"}  ,{"name" : "fa-fa-globe","value" : "fa-globe"}  ,{"name" : "fa-wrench","value" : "fa-wrench"}  ,{"name" : "fa-tasks","value" : "fa-tasks"}  ,{"name" : "fa-filter","value" : "fa-filter"}  ,{"name" : "fa-briefcase","value" : "fa-briefcase"}  ,{"name" : "fa-arrows-alt","value" : "fa-arrows-alt"}  ,{"name" : "fa-users","value" : "fa-users"}  ,{"name" : "fa-link","value" : "fa-link"}  ,{"name" : "fa-cloud","value" : "fa-cloud"}  ,{"name" : "fa-flask","value" : "fa-flask"}  ,{"name" : "fa-scissors","value" : "fa-scissors"}  ,{"name" : "fa-files-o","value" : "fa-files-o"}  ,{"name" : "fa-paperclip","value" : "fa-paperclip"}  ,{"name" : "fa-floppy-o","value" : "fa-floppy-o"}  ,{"name" : "fa-square","value" : "fa-square"}  ,{"name" : "fa-bars","value" : "fa-bars"}  ,{"name" : "fa-fa-list-ul","value" : "fa-list-ul"}  ,{"name" : "fa-list-ol","value" : "fa-list-ol"}  ,{"name" : "fa-strikethrough","value" : "fa-strikethrough"}  ,{"name" : "fa-underline","value" : "fa-underline"}  ,{"name" : "fa-table","value" : "fa-table"}  ,{"name" : "fa-magic","value" : "fa-magic"}  ,{"name" : "fa-truck","value" : "fa-truck"}  ,{"name" : "fa-pinterest","value" : "fa-pinterest"}  ,{"name" : "fa-pinterest-square","value" : "fa-pinterest-square"}  ,{"name" : "fa-google-plus-square","value" : "fa-google-plus-square"}  ,{"name" : "fa-google-plus","value" : "fa-google-plus"}  ,{"name" : "fa-money","value" : "fa-money"}  ,{"name" : "fa-caret-down","value" : "fa-caret-down"}  ,{"name" : "fa-caret-up","value" : "fa-caret-up"}  ,{"name" : "fa-caret-left","value" : "fa-caret-left"}  ,{"name" : "fa-caret-right","value" : "fa-caret-right"}  ,{"name" : "fa-columns","value" : "fa-columns"}  ,{"name" : "fa-sort","value" : "fa-sort"}  ,{"name" : "fa-sort-desc","value" : "fa-sort-desc"}  ,{"name" : "fa-sort-asc","value" : "fa-sort-asc"}  ,{"name" : "fa-envelope","value" : "fa-envelope"}  ,{"name" : "fa-linkedin","value" : "fa-linkedin"}  ,{"name" : "fa-undo","value" : "fa-undo"}  ,{"name" : "fa-gavel","value" : "fa-gavel"}  ,{"name" : "fa-tachometer","value" : "fa-tachometer"}  ,{"name" : "fa-comment-o","value" : "fa-comment-o"}  ,{"name" : "fa-comments-o","value" : "fa-comments-o"}  ,{"name" : "fa-bolt","value" : "fa-bolt"}  ,{"name" : "fa-sitemap","value" : "fa-sitemap"}  ,{"name" : "fa-umbrella","value" : "fa-umbrella"}  ,{"name" : "fa-clipboard","value" : "fa-clipboard"}  ,{"name" : "fa-lightbulb-","value" : "fa-lightbulb-o"}  ,{"name" : "fa-fa-exchange","value" : "fa-exchange"}  ,{"name" : "fa-cloud-download","value" : "fa-cloud-download"}  ,{"name" : "fa-cloud-upload","value" : "fa-cloud-upload"}  ,{"name" : "fa-user-md","value" : "fa-user-md"}  ,{"name" : "fa-stethoscop","value" : "fa-stethoscope"}  ,{"name" : "fa-suitcase","value" : "fa-suitcase"}  ,{"name" : "fa-fa-bell-o","value" : "fa-bell-o"}  ,{"name" : "fa-coffee","value" : "fa-coffee"}  ,{"name" : "fa-cutlery","value" : "fa-cutlery"}  ,{"name" : "fa-file-text-o","value" : "fa-file-text-o"}  ,{"name" : "fa-building-o","value" : "fa-building-o"}  ,{"name" : "fa-hospital-o","value" : "fa-hospital-o"}  ,{"name" : "fa-ambulance","value" : "fa-ambulance"}  ,{"name" : "fa-medkit","value" : "fa-medkit"}  ,{"name" : "fa-fighter-jet","value" : "fa-fighter-jet"}  ,{"name" : "fa-beer","value" : "fa-beer"}  ,{"name" : "fa-h-square","value" : "fa-h-square"}  ,{"name" : "fa-plus-square","value" : "fa-plus-square"}  ,{"name" : "fa-angle-double-left","value" : "fa-angle-double-left"}  ,{"name" : "fa-angle-double-right","value" : "fa-angle-double-right"}  ,{"name" : "fa-fa-angle-double-up","value" : "fa-angle-double-up"}  ,{"name" : "fa-angle-double-down","value" : "fa-angle-double-down"} ,	{"name" : "fa-angle-left","value" : "fa-angle-left"}  ,{"name" : "fa-angle-right","value" : "fa-angle-right"}  ,{"name" : "fa-angle-up","value" : "fa-angle-up"}  ,{"name" : "fa-angle-down","value" : "fa-angle-down"}  ,{"name" : "fa-desktop","value" : "fa-desktop"}  ,{"name" : "fa-laptop","value" : "fa-laptop"}  ,{"name" : "fa-tablet","value" : "fa-tablet"}  ,{"name" : "fa-mobile","value" : "fa-mobile"}  ,{"name" : "fa-circle-o","value" : "fa-circle-o"}  ,{"name" : "fa-quote-left","value" : "fa-quote-left"}  ,{"name" : "fa-quote-right","value" : "fa-quote-right"}  ,{"name" : "fa-spinner","value" : "fa-spinner"}  ,{"name" : "fa-circle","value" : "fa-circle"}  ,{"name" : "fa-reply","value" : "fa-reply"}  ,{"name" : "fa-github-alt","value" : "fa-github-alt"}  ,{"name" : "fa-folder-o","value" : "fa-folder-o"}  ,{"name" : "fa-folder-open-o","value" : "fa-folder-open-o"}  ,{"name" : "fa-smile-o","value" : "fa-smile-o"}  ,{"name" : "fa-frown-o","value" : "fa-frown-o"}  ,{"name" : "fa-meh-o","value" : "fa-meh-o"}  ,{"name" : "fa-gamepad","value" : "fa-gamepad"}  ,{"name" : "fa-keyboard-o","value" : "fa-keyboard-o"}  ,{"name" : "fa-flag-o","value" : "fa-flag-o"}  ,{"name" : "fa-flag-checkered","value" : "fa-flag-checkered"}  ,{"name" : "fa-terminal","value" : "fa-terminal"}  ,{"name" : "fa-code","value" : "fa-code"}  ,{"name" : "fa-reply-all","value" : "fa-reply-all"}  ,{"name" : "fa-star-half-o","value" : "fa-star-half-o"}  ,{"name" : "fa-location-arrow","value" : "fa-location-arrow"}  ,{"name" : "fa-crop","value" : "fa-crop"}  ,{"name" : "fa-code-fork","value" : "fa-code-fork"}  ,{"name" : "fa-chain-broken","value" : "fa-chain-broken"}  ,{"name" : "fa-question","value" : "fa-question"}  ,{"name" : "fa-info","value" : "fa-info"}  ,{"name" : "fa-exclamation","value" : "fa-exclamation"}  ,{"name" : "fa-superscript","value" : "fa-superscript"}  ,{"name" : "fa-subscript","value" : "fa-subscript"}  ,{"name" : "fa-eraser","value" : "fa-eraser"}  ,{"name" : "fa-puzzle-piece","value" : "fa-puzzle-piece"}  ,{"name" : "fa-microphone","value" : "fa-microphone"}  ,{"name" : "fa-microphone-slash","value" : "fa-microphone-slash"}  ,{"name" : "fa-","value" : "fa-shield"}  ,{"name" : "fa-","value" : "fa-calendar-o"}  ,{"name" : "fa-fire-extinguisher","value" : "fa-fire-extinguisher"}  ,{"name" : "fa-rocket","value" : "fa-rocket"}  ,{"name" : "fa-maxcdn","value" : "fa-maxcdn"}  ,{"name" : "fa-","value" : "fa-chevron-circle-left"}  ,{"name" : "fa-","value" : "fa-chevron-circle-right"}  ,{"name" : "fa-","value" : "fa-chevron-circle-up"}  ,{"name" : "fa-chevron-circle-left","value" : "fa-chevron-circle-down"}  ,{"name" : "fa-html5","value" : "fa-html5"}  ,{"name" : "fa-css3","value" : "fa-css3"}  ,{"name" : "fa-anchor","value" : "fa-anchor"}  ,{"name" : "fa-unlock-alt","value" : "fa-unlock-alt"}  ,{"name" : "fa-bullseye","value" : "fa-bullseye"}  ,{"name" : "fa-ellipsis-h","value" : "fa-ellipsis-h"}  ,{"name" : "fa-ellipsis-v","value" : "fa-ellipsis-v"}  ,{"name" : "fa-rss-square","value" : "fa-rss-square"}  ,{"name" : "fa-play-circle","value" : "fa-play-circle"}  ,{"name" : "fa-ticket","value" : "fa-ticket"}  ,{"name" : "fa-minus-square","value" : "fa-minus-square"}  ,{"name" : "fa-minus-square-o","value" : "fa-minus-square-o"}  ,{"name" : "fa-level-up","value" : "fa-level-up"}  ,{"name" : "fa-level-down","value" : "fa-level-down"}  ,{"name" : "fa-check-square","value" : "fa-check-square"}  ,{"name" : "fa-pencil-square","value" : "fa-pencil-square"}  ,{"name" : "fa-external-link-square","value" : "fa-external-link-square"}  ,{"name" : "fa-share-square","value" : "fa-share-square"}  ,{"name" : "fa-compass","value" : "fa-compass"}  ,{"name" : "fa-caret-square-o-down","value" : "fa-caret-square-o-down"}  ,{"name" : "fa-caret-square-o-up","value" : "fa-caret-square-o-up"}  ,{"name" : "fa-fa-caret-square-o-right","value" : "fa-caret-square-o-right"}  ,{"name" : "fa-eur","value" : "fa-eur"}  ,{"name" : "fa-gbp","value" : "fa-gbp"}  ,{"name" : "fa-usd","value" : "fa-usd"}  ,{"name" : "fa-inr","value" : "fa-inr"} ,{"name" : "fa-jpy","value" : "fa-jpy"}  ,{"name" : "fa-rub","value" : "fa-rub"}  ,{"name" : "fa-krw","value" : "fa-krw"}  ,{"name" : "fa-btc","value" : "fa-btc"}  ,{"name" : "fa-file","value" : "fa-file"}  ,{"name" : "fa-text","value" : "fa-file-text"}  ,{"name" : "fa-sort-alpha-asc","value" : "fa-sort-alpha-asc"}  ,{"name" : "fa-sort-alpha-desc","value" : "fa-sort-alpha-desc"}  ,{"name" : "fa-sort-amount-asc","value" : "fa-sort-amount-asc"}  ,{"name" : "fa-sort-amount-desc","value" : "fa-sort-amount-desc"}  ,{"name" : "fa-sort-numeric-asc","value" : "fa-sort-numeric-asc"}  ,{"name" : "fa-sort-numeric-desc","value" : "fa-sort-numeric-desc"}  ,{"name" : "fa-thumbs-up","value" : "fa-thumbs-up"}  ,{"name" : "fa-thumbs-down","value" : "fa-thumbs-down"}  ,{"name" : "fa-youtube-square","value" : "fa-youtube-square"}  ,{"name" : "fa-youtube","value" : "fa-youtube"}  ,{"name" : "fa-xing","value" : "fa-xing"}  ,{"name" : "fa-xing-square","value" : "fa-xing-square"}  ,{"name" : "fa-youtube-play","value" : "fa-youtube-play"}  ,{"name" : "fa-dropbox","value" : "fa-dropbox"}  ,{"name" : "fa-stack-overflow","value" : "fa-stack-overflow"}  ,{"name" : "fa-instagram","value" : "fa-instagram"}  ,{"name" : "fa-flickr","value" : "fa-flickr"}  ,{"name" : "fa-adn","value" : "fa-adn"}  ,{"name" : "fa-bitbucket","value" : "fa-bitbucket"}  ,{"name" : "fa-bitbucket-square","value" : "fa-bitbucket-square"}  ,{"name" : "fa-tumblr","value" : "fa-tumblr"}  ,{"name" : "fa-tumblr-square","value" : "fa-tumblr-square"}  ,{"name" : "fa-long-arrow-down","value" : "fa-long-arrow-down"}  ,{"name" : "fa-long-arrow-up","value" : "fa-long-arrow-up"}  ,{"name" : "fa-long-arrow-left","value" : "fa-long-arrow-left"}  ,{"name" : "fa-long-arrow-right","value" : "fa-long-arrow-right"}  ,{"name" : "fa-apple","value" : "fa-apple"}  ,{"name" : "fa-windows","value" : "fa-windows"}  ,{"name" : "fa-android","value" : "fa-android"}  ,{"name" : "fa-linux","value" : "fa-linux"}  ,{"name" : "fa-dribbble","value" : "fa-dribbble"}  ,{"name" : "fa-skype","value" : "fa-skype"}  ,{"name" : "fa-foursquare","value" : "fa-foursquare"}  ,{"name" : "fa-trello","value" : "fa-trello"}  ,{"name" : "fa-female","value" : "fa-female"}  ,{"name" : "fa-male","value" : "fa-male"}  ,{"name" : "fa-gratipay","value" : "fa-gratipay"}  ,{"name" : "fa-sun-o","value" : "fa-sun-o"}  ,{"name" : "fa-moon-o","value" : "fa-moon-o"}  ,{"name" : "fa-archive","value" : "fa-archive"}  ,{"name" : "fa-bug","value" : "fa-bug"}  ,{"name" : "fa-vk","value" : "fa-vk"}  ,{"name" : "fa-weibo","value" : "fa-weibo"}  ,{"name" : "fa-renren","value" : "fa-renren"}  ,{"name" : "fa-pagelines","value" : "fa-pagelines"}  ,{"name" : "fa-stack-exchange","value" : "fa-stack-exchange"}  ,{"name" : "fa-arrow-circle-o-right","value" : "fa-arrow-circle-o-right"}  ,{"name" : "fa-arrow-circle-o-left","value" : "fa-arrow-circle-o-left"}  ,{"name" : "fa-caret-square-o-left","value" : "fa-caret-square-o-left"}  ,{"name" : "fa-dot-circle-","value" : "fa-dot-circle-o"}  ,{"name" : "fa-wheelchair","value" : "fa-wheelchair"}  ,{"name" : "fa-vimeo-square","value" : "fa-vimeo-square"}  ,{"name" : "fa-try","value" : "fa-try"}  ,{"name" : "fa-plus-square-o","value" : "fa-plus-square-o"}  ,{"name" : "fa-space-shuttle","value" : "fa-space-shuttle"}  ,{"name" : "fa-slack","value" : "fa-slack"}  ,{"name" : "fa-envelope-square","value" : "fa-envelope-square"}  ,{"name" : "fa-wordpress","value" : "fa-wordpress"}  ,{"name" : "fa-openid","value" : "fa-openid"}  ,{"name" : "fa-university","value" : "fa-university"}  ,{"name" : "fa-graduation-cap","value" : "fa-graduation-cap"}  ,{"name" : "fa-yahoo","value" : "fa-yahoo"}  ,{"name" : "fa-google","value" : "fa-google"}  ,{"name" : "fa-reddit","value" : "fa-reddit"}  ,{"name" : "fa-reddit-square","value" : "fa-reddit-square"}  ,{"name" : "fa-stumbleupon-circle","value" : "fa-stumbleupon-circle"}  ,{"name" : "fa-stumbleupon","value" : "fa-stumbleupon"}  ,{"name" : "fa-delicious","value" : "fa-delicious"}  ,{"name" : "fa-digg","value" : "fa-digg"}  ,{"name" : "fa-pied-piper","value" : "fa-pied-piper"}  ,{"name" : "fa-pied-piper-alt","value" : "fa-pied-piper-alt"}  ,{"name" : "fa-drupal","value" : "fa-drupal"}  ,{"name" : "fa-joomla","value" : "fa-joomla"}  ,{"name" : "fa-language","value" : "fa-language"}  ,{"name" : "fa-fax","value" : "fa-fax"}  ,{"name" : "fa-building","value" : "fa-building"}  ,{"name" : "fa-child","value" : "fa-child"}  ,{"name" : "fa-paw","value" : "fa-paw"}  ,{"name" : "fa-spoon","value" : "fa-spoon"}  ,{"name" : "fa-cube","value" : "fa-cube"}  ,{"name" : "fa-cubes","value" : "fa-cubes"}  ,{"name" : "fa-behance","value" : "fa-behance"}  ,{"name" : "fa-behance-square","value" : "fa-behance-square"}  ,{"name" : "fa-steam","value" : "fa-steam"}  ,{"name" : "fa-steam-square","value" : "fa-steam-square"}  ,{"name" : "fa-recycle","value" : "fa-recycle"}  ,{"name" : "fa-car","value" : "fa-car"}  ,{"name" : "fa-taxi","value" : "fa-taxi"}  ,{"name" : "fa-tree","value" : "fa-tree"}  ,{"name" : "fa-spotify","value" : "fa-spotify"}  ,{"name" : "fa-deviantart","value" : "fa-deviantart"}  ,{"name" : "fa-soundcloud","value" : "fa-soundcloud"}  ,{"name" : "fa-database","value" : "fa-database"}  ,{"name" : "fa-file-pdf-o","value" : "fa-file-pdf-o"}  ,{"name" : "fa-file-word-o","value" : "fa-file-word-o"}  ,{"name" : "fa-file-excel-o","value" : "fa-file-excel-o"}  ,{"name" : "fa-file-powerpoint-o","value" : "fa-file-powerpoint-o"}  ,{"name" : "fa-file-image-o","value" : "fa-file-image-o"}  ,{"name" : "fa-file-archive-o","value" : "fa-file-archive-o"}  ,{"name" : "fa-file-audio-o","value" : "fa-file-audio-o"}  ,{"name" : "fa-file-video-o","value" : "fa-file-video-o"}  ,{"name" : "fa-file-code-o","value" : "fa-file-code-o"}  ,{"name" : "fa-vine","value" : "fa-vine"}  ,{"name" : "fa-codepen","value" : "fa-codepen"} ,{"name" : "fa-jsfiddle","value" : "fa-jsfiddle"}  ,{"name" : "fa-life-ring","value" : "fa-life-ring"}  ,{"name" : "fa-circle-o-notch","value" : "fa-circle-o-notch"}  ,{"name" : "fa-rebel","value" : "fa-rebel"}  ,{"name" : "fa-empire","value" : "fa-empire"}  ,{"name" : "fa-git-square","value" : "fa-git-square"}  ,{"name" : "fa-git","value" : "fa-git"}  ,{"name" : "fa-hacker-news","value" : "fa-hacker-news"}  ,{"name" : "fa-tencent-weibo","value" : "fa-tencent-weibo"}  ,{"name" : "fa-qq","value" : "fa-qq"}  ,{"name" : "fa-weixin","value" : "fa-weixin"}  ,{"name" : "fa-paper-plane","value" : "fa-paper-plane"}  ,{"name" : "fa-paper-plane-o","value" : "fa-paper-plane-o"}  ,{"name" : "fa-history","value" : "fa-history"}  ,{"name" : "fa-circle-thin","value" : "fa-circle-thin"}  ,{"name" : "fa-header","value" : "fa-header"}  ,{"name" : "fa-paragraph","value" : "fa-paragraph"}  ,{"name" : "fa-sliders","value" : "fa-sliders"}  ,{"name" : "fa-share-alt","value" : "fa-share-alt"}  ,{"name" : "fa-share-alt-square","value" : "fa-share-alt-square"}  ,{"name" : "fa-bomb","value" : "fa-bomb"}  ,{"name" : "fa-futbol-o","value" : "fa-futbol-o"}  ,{"name" : "fa-tty","value" : "fa-tty"}  ,{"name" : "fa-binoculars","value" : "fa-binoculars"}  ,{"name" : "fa-plug","value" : "fa-plug"}  ,{"name" : "fa-slideshare","value" : "fa-slideshare"}  ,{"name" : "fa-twitch","value" : "fa-twitch"}  ,{"name" : "fa-yelp","value" : "fa-yelp"}  ,{"name" : "fa-newspaper-o","value" : "fa-newspaper-o"}  ,{"name" : "fa-wifi","value" : "fa-wifi"}  ,{"name" : "fa-calculator","value" : "fa-calculator"}  ,{"name" : "fa-paypal","value" : "fa-paypal"}  ,{"name" : "fa-google-wallet","value" : "fa-google-wallet"}  ,{"name" : "fa-cc-visa","value" : "fa-cc-visa"}  ,{"name" : "fa-cc-mastercard","value" : "fa-cc-mastercard"}  ,{"name" : "fa-cc-discover","value" : "fa-cc-discover"}  ,{"name" : "fa-cc-amex","value" : "fa-cc-amex"}  ,{"name" : "fa-cc-paypal","value" : "fa-cc-paypal"}  ,{"name" : "fa-cc-stripe","value" : "fa-cc-stripe"}  ,{"name" : "fa-bell-slash","value" : "fa-bell-slash"}  ,{"name" : "fa-bell-slash-o","value" : "fa-bell-slash-o"}  ,{"name" : "fa-trash","value" : "fa-trash"}  ,{"name" : "fa-copyright","value" : "fa-copyright"}  ,{"name" : "fa-at","value" : "fa-at"}  ,{"name" : "fa-eyedropper","value" : "fa-eyedropper"}  ,{"name" : "fa-paint-brush","value" : "fa-paint-brush"}  ,{"name" : "fa-birthday-cake","value" : "fa-birthday-cake"}  ,{"name" : "fa-area-chart","value" : "fa-area-chart"}  ,{"name" : "fa-pie-chart","value" : "fa-pie-chart"}  ,{"name" : "fa-line-chart","value" : "fa-line-chart"}  ,{"name" : "fa-lastfm","value" : "fa-lastfm"}  ,{"name" : "fa-lastfm-square","value" : "fa-lastfm-square"}  ,{"name" : "fa-toggle-off","value" : "fa-toggle-off"}  ,{"name" : "fa-toggle-on","value" : "fa-toggle-on"}  ,{"name" : "fa-bicycle","value" : "fa-bicycle"}  ,{"name" : "fa-bus","value" : "fa-bus"}  ,{"name" : "fa-ioxhost","value" : "fa-ioxhost"}  ,{"name" : "fa-angellist","value" : "fa-angellist"}  ,{"name" : "fa-cc","value" : "fa-cc"}  ,{"name" : "fa-ils","value" : "fa-ils"}  ,{"name" : "fa-meanpath","value" : "fa-meanpath"}  ,{"name" : "fa-buysellads","value" : "fa-buysellads"}  ,{"name" : "fa-connectdevelop","value" : "fa-connectdevelop"}  ,{"name" : "fa-dashcube","value" : "fa-dashcube"}  ,{"name" : "fa-forumbee","value" : "fa-forumbee"}  ,{"name" : "fa-leanpub","value" : "fa-leanpub"}  ,{"name" : "fa-sellsy","value" : "fa-sellsy"}  ,{"name" : "fa-shirtsinbulk","value" : "fa-shirtsinbulk"}  ,{"name" : "fa-simplybuilt","value" : "fa-simplybuilt"}  ,{"name" : "fa-skyatlas","value" : "fa-skyatlas"}  ,{"name" : "fa-cart-plus","value" : "fa-cart-plus"}  ,{"name" : "fa-cart-arrow-down","value" : "fa-cart-arrow-down"}  ,{"name" : "fa-diamond","value" : "fa-diamond"}  ,{"name" : "fa-ship","value" : "fa-ship"}  ,{"name" : "fa-user-secret","value" : "fa-user-secret"}  ,{"name" : "fa-motorcycle","value" : "fa-motorcycle"}  ,{"name" : "fa-street-view","value" : "fa-street-view"}  ,{"name" : "fa-heartbeat","value" : "fa-heartbeat"}  ,{"name" : "fa-venus","value" : "fa-venus"}  ,{"name" : "fa-mars","value" : "fa-mars"}  ,{"name" : "fa-mercury","value" : "fa-mercury"}  ,{"name" : "fa-transgender","value" : "fa-transgender"}  ,{"name" : "fa-transgender-alt","value" : "fa-transgender-alt"}  ,{"name" : "fa-","value" : "fa-venus-double"}  ,{"name" : "fa-","value" : "fa-mars-double"}  ,{"name" : "fa-","value" : "fa-venus-mars"}  ,{"name" : "fa-mars-stroke","value" : "fa-mars-stroke"}  ,{"name" : "fa-mars-stroke-v","value" : "fa-mars-stroke-v"}  ,{"name" : "fa-mars-stroke-h","value" : "fa-mars-stroke-h"}  ,{"name" : "fa-neuter","value" : "fa-neuter"}  ,{"name" : "fa-facebook-official","value" : "fa-facebook-official"}  ,{"name" : "fa-pinterest-p","value" : "fa-pinterest-p"}  ,{"name" : "fa-whatsapp","value" : "fa-whatsapp"}  ,{"name" : "fa-server","value" : "fa-server"}  ,{"name" : "fa-user-plus","value" : "fa-user-plus"}  ,{"name" : "fa-user-times","value" : "fa-user-times"}  ,{"name" : "fa-bed","value" : "fa-bed"}  ,{"name" : "fa-viacoin","value" : "fa-viacoin"}  ,{"name" : "fa-train","value" : "fa-train"}  ,{"name" : "fa-subway","value" : "fa-subway"}  ,{"name" : "fa-medium","value" : "fa-medium"}
			];
					
			$scope.isDisabled    = false;
            
			$scope.selectedItem = $scope.myItem.icon;
            //$scope.elem = $scope.myElement.elements;  // list of elements to be displayed
            $scope.querySearch   = querySearch;
            $scope.selectedItemChange = selectedItemChange;

            function querySearch (query) {
				var results = query ? $scope.elem.filter( createFilterFor(query) ) : $scope.elem;
                  
				return results;
            }
                      
            function selectedItemChange(item) { //function call when the value in select field change
                $scope.myItem.icon = item.value;
			}
			
			 function itemName(name) { //function call when the value in select field change
			 console.log(name);
               return "<i class='fa " + name + "'></i>&nbsp;&nbsp;" + name;
			}
            
            //filter function for search query
            function createFilterFor(query) {
				return function filterFn(elem) {
					return (elem.name.indexOf(query) >= 0);
				};
            }			
				
		},
		templateUrl: "components/faicon_picker/faiconPicker.html"			
	}; 
});