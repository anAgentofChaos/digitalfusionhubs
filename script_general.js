(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"start":"this.init()","layout":"absolute","class":"Player","data":{"defaultLocale":"en","name":"Player540","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"rate":1},"history":{}},"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getComponentByName":TDV.Tour.Script.getComponentByName,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initQuiz":TDV.Tour.Script.initQuiz,"registerKey":TDV.Tour.Script.registerKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"initAnalytics":TDV.Tour.Script.initAnalytics,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getKey":TDV.Tour.Script.getKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"clone":TDV.Tour.Script.clone,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaByName":TDV.Tour.Script.getMediaByName,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"init":TDV.Tour.Script.init,"translate":TDV.Tour.Script.translate,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowScore":TDV.Tour.Script.quizShowScore,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"quizStart":TDV.Tour.Script.quizStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playAudioList":TDV.Tour.Script.playAudioList,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"createTween":TDV.Tour.Script.createTween,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"mixObject":TDV.Tour.Script.mixObject,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"resumePlayers":TDV.Tour.Script.resumePlayers,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeJS":TDV.Tour.Script.executeJS,"shareSocial":TDV.Tour.Script.shareSocial,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"openLink":TDV.Tour.Script.openLink,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPixels":TDV.Tour.Script.getPixels,"existsKey":TDV.Tour.Script.existsKey},"watermark":false,"children":["this.MainViewer"],"height":"100%","hash": "823742873c5d25129ff3f34aed94f2958c17debf36007c93f6d17205fe003be2", "definitions": [{"playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","playbackBarHeadHeight":15,"class":"ViewerArea","subtitlesTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"data":{"name":"Main Viewer"},"playbackBarHeadBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarHeadShadow":true,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"progressRight":"33%","height":"100%","toolTipPaddingBottom":4,"toolTipFontFamily":"Arial","progressOpacity":0.7,"propagateClick":false,"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesBorderColor":"#FFFFFF","playbackBarBottom":5,"toolTipBorderColor":"#767676","surfaceReticleSelectionColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"id":"MainViewer","subtitlesFontFamily":"Arial","playbackBarHeight":10,"toolTipTextShadowColor":"#000000","progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"progressBackgroundColor":["#000000"],"width":"100%","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","progressBottom":10,"subtitlesGap":0,"toolTipFontSize":"1.11vmin","subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"vrPointerSelectionColor":"#FF6600","progressHeight":2,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderSize":0,"minHeight":50,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"progressBarBorderRadius":2,"playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"minWidth":100,"playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"vrPointerColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressBorderRadius":2,"toolTipFontColor":"#606060","toolTipPaddingTop":4,"progressLeft":"33%","toolTipPaddingRight":6,"subtitlesTop":0,"playbackBarHeadBorderRadius":0},{"veilColorRatios":[0,1],"layout":"vertical","closeButtonRollOverIconLineWidth":2,"closeButtonBorderSize":0,"shadow":true,"verticalAlign":"middle","class":"Window","headerPaddingRight":0,"closeButtonPressedBackgroundColor":[],"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonBackgroundColorRatios":[],"bodyBorderSize":0,"closeButtonPressedBackgroundOpacity":0,"modal":true,"overflow":"scroll","footerBorderColor":"#000000","headerBorderColor":"#000000","shadowSpread":1,"bodyPaddingBottom":0,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"bodyPaddingTop":0,"data":{"name":"Window4556"},"closeButtonIconLineWidth":2,"veilOpacity":0.4,"closeButtonRollOverBackgroundColorRatios":[],"veilColorDirection":"horizontal","closeButtonPaddingBottom":0,"height":"90%","closeButtonPressedIconColor":"#FFFFFF","closeButtonIconWidth":20,"propagateClick":false,"headerPaddingTop":10,"titleFontFamily":"Arial","bodyPaddingRight":0,"closeButtonRollOverBackgroundOpacity":0,"scrollBarMargin":2,"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"width":"90%","headerBorderSize":0,"gap":10,"headerPaddingLeft":10,"closeButtonRollOverBorderSize":0,"headerVerticalAlign":"middle","headerBackgroundColorDirection":"vertical","headerPaddingBottom":5,"closeButtonPressedBorderSize":0,"titlePaddingRight":5,"id":"window_F39093C7_E14E_342D_41E2_BD6C4515140A","veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"footerBackgroundColorRatios":[0,0.8980392156862745,1],"closeButtonBackgroundColor":[],"closeButtonPressedBorderColor":"#000000","borderRadius":5,"bodyBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonBorderColor":"#000000","shadowColor":"#000000","bodyPaddingLeft":0,"closeButtonBackgroundOpacity":0,"closeButtonPaddingLeft":0,"closeButtonRollOverIconColor":"#FFFFFF","shadowHorizontalLength":3,"footerBorderSize":0,"closeButtonIconColor":"#B2B2B2","closeButtonIconHeight":20,"titleFontColor":"#000000","children":["this.WebFrame_F5061DBC_E5A1_0F0F_41E9_CF5B545F5B29"],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titleFontSize":"1.29vmin","shadowOpacity":0.5,"closeButtonPaddingTop":0,"titlePaddingBottom":5,"backgroundColorRatios":[],"shadowVerticalLength":0,"titleHorizontalAlign":"left","bodyBackgroundOpacity":0,"veilColor":["#000000","#000000"],"closeButtonRollOverBorderColor":"#000000","minHeight":0,"footerBackgroundOpacity":0,"closeButtonPressedIconLineWidth":3,"horizontalAlign":"center","minWidth":0,"bodyBorderColor":"#000000","headerBackgroundOpacity":0,"scrollBarColor":"#000000","closeButtonRollOverBackgroundColor":[],"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"backgroundColor":[],"closeButtonBorderRadius":11,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"titlePaddingTop":5,"titlePaddingLeft":5,"closeButtonPaddingRight":0,"footerHeight":5,"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"footerBackgroundColorDirection":"vertical","closeButtonPressedBackgroundColorRatios":[]},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_camera"},{"adjacentPanoramas":[{"distance":75.35,"panorama":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54","yaw":-127.27,"backwardYaw":83.86,"class":"AdjacentPanorama","data":{"overlayID":"overlay_EB9212F4_E5A3_751F_41E0_C4C0ED79BAFF"},"select":"this.overlay_EB9212F4_E5A3_751F_41E0_C4C0ED79BAFF.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_EB9212F4_E5A3_751F_41E0_C4C0ED79BAFF"],"label":trans('panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5.label'),"frames":[{"thumbnailUrl":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_t.jpg","cube":{"levels":[{"colCount":12,"url":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_0/{face}/0/{row}_{column}.jpg","rowCount":2,"tags":["ondemand","mobilevr2gen"],"class":"TiledImageResourceLevel","height":1024,"width":6144},{"colCount":6,"url":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_0/{face}/1/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","data":{"label":"Bio_Landscape_fant_skybox"},"vfov":175.77,"hfov":360,"thumbnailUrl":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_t.jpg","hfovMin":"150%","hfovMax":130,"id":"panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5"},{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","class":"PanoramaPlayer","displayPlaybackBar":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_EA0FD6F3_E16B_09C4_41DD_96349A5EAA9A"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54","camera":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5","camera":"this.panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"adjacentPanoramas":[{"distance":100,"panorama":"this.panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5","yaw":83.86,"backwardYaw":-127.27,"class":"AdjacentPanorama","data":{"overlayID":"overlay_EA1C753E_E5A3_1F0B_41E2_21263906E03C"},"select":"this.overlay_EA1C753E_E5A3_1F0B_41E2_21263906E03C.get('areas').forEach(function(a){ a.trigger('click') })"}],"overlays":["this.overlay_EF8BD8A4_E14E_3463_4178_0B173290BC0D","this.overlay_EBBA4929_E5A1_3709_41E4_7336A6F5B68B","this.overlay_EA1C753E_E5A3_1F0B_41E2_21263906E03C"],"label":trans('panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54.label'),"frames":[{"thumbnailUrl":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_t.jpg","cube":{"levels":[{"colCount":24,"url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/0/{row}_{column}.jpg","rowCount":4,"tags":["ondemand","mobilevr2gen"],"class":"TiledImageResourceLevel","height":2048,"width":12288},{"colCount":12,"url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/1/{row}_{column}.jpg","rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","height":1024,"width":6144},{"colCount":6,"url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/2/{row}_{column}.jpg","rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","height":512,"width":3072},{"rowCount":1,"url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/vr/0.jpg","colCount":6,"class":"TiledImageResourceLevel","height":1536,"width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","data":{"label":"SWMroomcam6_A"},"vfov":180,"hfov":360,"thumbnailUrl":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_t.jpg","hfovMin":"135%","hfovMax":130,"id":"panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54"},{"class":"WebFrame","data":{"name":"WebFrame5306"},"scrollEnabled":false,"height":"100%","backgroundColorRatios":[],"propagateClick":false,"minHeight":0,"minWidth":0,"url":trans('WebFrame_F5061DBC_E5A1_0F0F_41E9_CF5B545F5B29.url'),"width":"100%","backgroundColor":[],"id":"WebFrame_F5061DBC_E5A1_0F0F_41E9_CF5B545F5B29"},{"areas":["this.HotspotPanoramaOverlayArea_EBAD7376_E5A3_7B1B_41D4_2AF8771E8D29"],"class":"HotspotPanoramaOverlay","data":{"label":"Portal_B","hasPanoramaAction":true},"useHandCursor":true,"items":[{"scaleMode":"fit_inside","distance":50,"class":"HotspotPanoramaOverlayImage","data":{"label":"Portal_B"},"vfov":25.88,"hfov":24.51,"rotationY":-5.91,"image":"this.res_F59A771A_E5A1_7B0B_41B4_F3E34D023AB2","pitch":-1.28,"yaw":-127.27}],"id":"overlay_EB9212F4_E5A3_751F_41E0_C4C0ED79BAFF","maps":[],"enabledInCardboard":true},{"movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_EA0FD6F3_E16B_09C4_41DD_96349A5EAA9A","class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB"],"class":"HotspotPanoramaOverlay","data":{"label":"Polygon"},"useHandCursor":true,"items":[{"distance":50,"class":"HotspotPanoramaOverlayImage","data":{"label":"Polygon"},"vfov":30.3,"hfov":85.14,"image":{"levels":[{"url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_HS_8btlct9n.png","class":"ImageResourceLevel","height":524,"width":1777}],"class":"ImageResource"},"pitch":9.63,"yaw":-0.92}],"id":"overlay_EF8BD8A4_E14E_3463_4178_0B173290BC0D","maps":[],"rollOverDisplay":true},{"areas":["this.HotspotPanoramaOverlayArea_EB9C6931_E5A1_3719_41EA_0A1A4FDE89D4"],"class":"HotspotPanoramaOverlay","data":{"label":"Circle 02c"},"useHandCursor":true,"items":[{"data":{"label":"Circle 02c"},"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":5.81,"hfov":17.6,"image":"this.AnimatedImageResource_F5379D0D_E5A1_0F09_41DE_5199AB661C1F","pitch":-15.06,"yaw":178.32,"scaleMode":"fit_inside"}],"id":"overlay_EBBA4929_E5A1_3709_41E4_7336A6F5B68B","maps":[],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_EB2135BB_E5A3_1F09_41E7_7D91C32C6F05"],"class":"HotspotPanoramaOverlay","data":{"label":"Portal_A"},"useHandCursor":true,"items":[{"scaleMode":"fit_inside","distance":50,"class":"HotspotPanoramaOverlayImage","data":{"label":"Portal_A"},"vfov":24.59,"hfov":27.43,"rotationY":-5.93,"image":"this.res_F59A2714_E5A1_7B05_41BE_A06286A07AF0","pitch":0.54,"yaw":83.86}],"id":"overlay_EA1C753E_E5A3_1F0B_41E2_21263906E03C","maps":[],"enabledInCardboard":true},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_EBAD7376_E5A3_7B1B_41D4_2AF8771E8D29","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"levels":[{"url":"media/res_F59A771A_E5A1_7B0B_41B4_F3E34D023AB2_0.png","class":"ImageResourceLevel","height":307,"width":307}],"class":"ImageResource","id":"res_F59A771A_E5A1_7B0B_41B4_F3E34D023AB2"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB","toolTip":trans('HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB.toolTip'),"class":"HotspotPanoramaOverlayArea","mapColor":"image","click":"this.WebFrame_F5061DBC_E5A1_0F0F_41E9_CF5B545F5B29.set('url', this.translate('PopupWebFrameBehaviour_F39303C9_E14E_3425_41E1_FE80016975F3.url')); this.showWindow(this.window_F39093C7_E14E_342D_41E2_BD6C4515140A, null, false)"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_EB9C6931_E5A1_3719_41EA_0A1A4FDE89D4","mapColor":"any"},{"levels":[{"url":"media/res_F59DA714_E5A1_7B1F_41EC_A557403E3925_0.png","class":"ImageResourceLevel","height":60,"width":6480}],"frameCount":24,"frameDuration":41,"colCount":24,"finalFrame":"first","rowCount":1,"class":"AnimatedImageResource","id":"AnimatedImageResource_F5379D0D_E5A1_0F09_41DE_5199AB661C1F"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_EB2135BB_E5A3_1F09_41E7_7D91C32C6F05","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"levels":[{"url":"media/res_F59A2714_E5A1_7B05_41BE_A06286A07AF0_0.png","class":"ImageResourceLevel","height":552,"width":552}],"class":"ImageResource","id":"res_F59A2714_E5A1_7B05_41BE_A06286A07AF0"}],"backgroundColorRatios":[0],"propagateClick":false,"minHeight":0,"minWidth":0,"scrollBarMargin":2,"scrollBarColor":"#000000","width":"100%","gap":10,"backgroundColor":["#999999"],"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.11.js.map
})();
//Generated with v2023.1.11, Sat Sep 30 2023