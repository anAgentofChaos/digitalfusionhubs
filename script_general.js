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
var script = {"defaultMenu":["fullscreen","mute","rotation"],"start":"this.init()","gap":10,"class":"Player","data":{"history":{},"textToSpeechConfig":{"stopBackgroundAudio":false,"pitch":1,"volume":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"rate":1},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","name":"Player540"},"watermark":false,"layout":"absolute","scripts":{"getOverlays":TDV.Tour.Script.getOverlays,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"shareSocial":TDV.Tour.Script.shareSocial,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowScore":TDV.Tour.Script.quizShowScore,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"existsKey":TDV.Tour.Script.existsKey,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"historyGoBack":TDV.Tour.Script.historyGoBack,"initAnalytics":TDV.Tour.Script.initAnalytics,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"translate":TDV.Tour.Script.translate,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizStart":TDV.Tour.Script.quizStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setValue":TDV.Tour.Script.setValue,"downloadFile":TDV.Tour.Script.downloadFile,"getKey":TDV.Tour.Script.getKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"clone":TDV.Tour.Script.clone,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"init":TDV.Tour.Script.init,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeJS":TDV.Tour.Script.executeJS,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setLocale":TDV.Tour.Script.setLocale,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"isPanorama":TDV.Tour.Script.isPanorama,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"mixObject":TDV.Tour.Script.mixObject,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"createTween":TDV.Tour.Script.createTween,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"showWindow":TDV.Tour.Script.showWindow,"unregisterKey":TDV.Tour.Script.unregisterKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getComponentByName":TDV.Tour.Script.getComponentByName},"backgroundColorRatios":[0],"children":["this.MainViewer"],"width":"100%","height":"100%","propagateClick":false,"scrollBarMargin":2,"scrollBarColor":"#000000","hash": "4f3e542882c96fe78fc47c999f0a99ebe39a98055efe39ffeb646969154964b3", "definitions": [{"bodyPaddingLeft":0,"closeButtonRollOverIconLineWidth":2,"closeButtonPaddingRight":0,"closeButtonBorderSize":0,"class":"Window","verticalAlign":"middle","bodyBorderSize":0,"data":{"name":"Window4556"},"closeButtonBackgroundColorRatios":[],"closeButtonRollOverIconColor":"#FFFFFF","overflow":"scroll","footerBorderColor":"#000000","closeButtonPressedBackgroundOpacity":0,"shadowSpread":1,"veilOpacity":0.4,"layout":"vertical","headerPaddingRight":0,"modal":true,"closeButtonIconColor":"#B2B2B2","closeButtonPaddingBottom":0,"closeButtonIconWidth":20,"shadow":true,"headerBorderColor":"#000000","hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"headerPaddingTop":10,"veilColorDirection":"horizontal","height":"90%","showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonPressedIconColor":"#FFFFFF","bodyPaddingBottom":0,"footerBackgroundOpacity":0,"propagateClick":false,"closeButtonRollOverBackgroundOpacity":0,"scrollBarMargin":2,"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"headerPaddingBottom":5,"titleFontColor":"#000000","headerBorderSize":0,"width":"90%","gap":10,"headerPaddingLeft":10,"closeButtonRollOverBackgroundColorRatios":[],"bodyBackgroundOpacity":0,"closeButtonIconLineWidth":2,"closeButtonRollOverBorderSize":0,"headerVerticalAlign":"middle","headerBackgroundColorDirection":"vertical","closeButtonPressedBorderColor":"#000000","closeButtonPressedBorderSize":0,"id":"window_F39093C7_E14E_342D_41E2_BD6C4515140A","veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"titlePaddingRight":5,"closeButtonPressedIconLineWidth":3,"borderRadius":5,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"shadowHorizontalLength":3,"bodyBackgroundColorDirection":"vertical","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"veilColor":["#000000","#000000"],"shadowColor":"#000000","closeButtonPressedBackgroundColor":[],"closeButtonRollOverBackgroundColor":[],"closeButtonPaddingLeft":0,"headerBackgroundOpacity":0,"footerBorderSize":0,"closeButtonBorderColor":"#000000","bodyBorderColor":"#000000","bodyPaddingTop":0,"shadowOpacity":0.5,"shadowVerticalLength":0,"children":["this.WebFrame_F1129564_E169_08CC_41E1_9CF9019398D9"],"backgroundColorRatios":[],"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonPaddingTop":0,"horizontalAlign":"center","titlePaddingBottom":5,"titleFontSize":"1.29vmin","titleHorizontalAlign":"left","scrollBarColor":"#000000","closeButtonIconHeight":20,"closeButtonRollOverBorderColor":"#000000","closeButtonPressedBackgroundColorRatios":[],"closeButtonBackgroundColor":[],"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"veilColorRatios":[0,1],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"backgroundColor":[],"bodyPaddingRight":0,"footerHeight":5,"titlePaddingTop":5,"titlePaddingLeft":5,"titleFontFamily":"Arial","closeButtonBackgroundOpacity":0,"minHeight":0,"minWidth":0,"footerBackgroundColorDirection":"vertical","closeButtonBorderRadius":11},{"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_EA0FD6F3_E16B_09C4_41DD_96349A5EAA9A","id":"panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_camera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54","camera":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5","camera":"this.panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"frames":[{"thumbnailUrl":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_t.jpg","cube":{"levels":[{"tags":["ondemand","mobilevr2gen"],"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"colCount":6,"height":1536,"class":"TiledImageResourceLevel","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/vr/0.jpg","rowCount":1,"width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"vfov":180,"hfov":360,"thumbnailUrl":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_t.jpg","label":trans('panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54.label'),"class":"Panorama","hfovMin":"135%","overlays":["this.overlay_EF8BD8A4_E14E_3463_4178_0B173290BC0D","this.overlay_EC9507F5_E16B_17CC_41E5_161418F30DD6"],"data":{"label":"SWMroomcam6_A"},"hfovMax":130,"id":"panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54","adjacentPanoramas":[{"distance":100,"select":"this.overlay_EC9507F5_E16B_17CC_41E5_161418F30DD6.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-179.66,"panorama":"this.panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5","class":"AdjacentPanorama","data":{"overlayID":"overlay_EC9507F5_E16B_17CC_41E5_161418F30DD6"},"backwardYaw":-121.44}]},{"frames":[{"thumbnailUrl":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_t.jpg","cube":{"levels":[{"tags":["ondemand","mobilevr2gen"],"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_0/{face}/0/{row}_{column}.jpg","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_0/{face}/1/{row}_{column}.jpg","rowCount":1,"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"vfov":175.77,"hfov":360,"thumbnailUrl":"media/panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5_t.jpg","label":trans('panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5.label'),"class":"Panorama","hfovMin":"150%","overlays":["this.overlay_EE50D979_E169_18C4_41E4_3F81DAE34FF1"],"data":{"label":"Bio_Landscape_fant_skybox"},"hfovMax":130,"id":"panorama_EAEE220C_E16B_085C_41D4_22F3F50742F5","adjacentPanoramas":[{"distance":55.63,"select":"this.overlay_EE50D979_E169_18C4_41E4_3F81DAE34FF1.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-121.44,"panorama":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54","class":"AdjacentPanorama","data":{"overlayID":"overlay_EE50D979_E169_18C4_41E4_3F81DAE34FF1"},"backwardYaw":-179.66}]},{"touchControlMode":"drag_rotation","displayPlaybackBar":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation"},{"playbackBarLeft":0,"minWidth":100,"playbackBarHeadHeight":15,"class":"ViewerArea","playbackBarHeadBorderColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadBorderSize":0,"progressBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","playbackBarHeadShadow":true,"playbackBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesBottom":50,"toolTipPaddingBottom":4,"progressRight":"33%","subtitlesTextShadowHorizontalLength":1,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","propagateClick":false,"playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarBottom":5,"toolTipBorderColor":"#767676","subtitlesBorderColor":"#FFFFFF","height":"100%","toolTipShadowColor":"#333138","surfaceReticleSelectionColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontFamily":"Arial","playbackBarHeight":10,"id":"MainViewer","toolTipFontFamily":"Arial","playbackBarProgressBorderSize":0,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipTextShadowColor":"#000000","width":"100%","progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"progressBackgroundColor":["#000000"],"progressBottom":10,"subtitlesGap":0,"toolTipFontSize":"1.11vmin","subtitlesBackgroundColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"vrPointerSelectionColor":"#FF6600","progressHeight":2,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"progressBarBorderRadius":2,"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"progressBorderSize":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","progressBorderRadius":2,"toolTipFontColor":"#606060","subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"progressLeft":"33%","subtitlesTop":0,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowColor":"#000000"},{"enterPointingToHorizon":true,"id":"panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_camera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera"},{"class":"WebFrame","data":{"name":"WebFrame4928"},"scrollEnabled":false,"backgroundColorRatios":[],"width":"100%","height":"100%","propagateClick":false,"url":trans('WebFrame_F1129564_E169_08CC_41E1_9CF9019398D9.url'),"backgroundColor":[],"id":"WebFrame_F1129564_E169_08CC_41E1_9CF9019398D9","minHeight":0,"minWidth":0},{"id":"sequence_EA0FD6F3_E16B_09C4_41DD_96349A5EAA9A","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence"},{"class":"HotspotPanoramaOverlay","data":{"label":"Polygon"},"maps":[],"useHandCursor":true,"id":"overlay_EF8BD8A4_E14E_3463_4178_0B173290BC0D","items":[{"hfov":85.14,"distance":50,"class":"HotspotPanoramaOverlayImage","data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"height":524,"class":"ImageResourceLevel","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_HS_8btlct9n.png","width":1777}]},"pitch":9.63,"yaw":-0.92,"vfov":30.3}],"areas":["this.HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB"],"rollOverDisplay":true},{"class":"HotspotPanoramaOverlay","data":{"label":"Circle Point 03"},"maps":[],"useHandCursor":true,"id":"overlay_EC9507F5_E16B_17CC_41E5_161418F30DD6","items":[{"vfov":12.43,"hfov":11.65,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","image":"this.AnimatedImageResource_F10114A0_E169_0844_41D1_E218EB2C34C8","pitch":0.43,"data":{"label":"Circle Point 03"},"yaw":-179.66}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_EF162867_E16B_18CC_41E0_CEE64CACA11F"]},{"class":"HotspotPanoramaOverlay","data":{"label":"Circle Point 03","hasPanoramaAction":true},"maps":[],"useHandCursor":true,"id":"overlay_EE50D979_E169_18C4_41E4_3F81DAE34FF1","items":[{"vfov":25.43,"hfov":22.98,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","image":"this.AnimatedImageResource_F106D4A2_E169_0844_41A4_7BF9F7CAA01C","pitch":-1.74,"data":{"label":"Circle Point 03"},"yaw":-121.44}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_EE51897E_E169_18BC_41E7_D3BAE595365F"]},{"mapColor":"image","id":"HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB.toolTip'),"click":"this.WebFrame_F1129564_E169_08CC_41E1_9CF9019398D9.set('url', this.translate('PopupWebFrameBehaviour_F39303C9_E14E_3425_41E1_FE80016975F3.url')); this.showWindow(this.window_F39093C7_E14E_342D_41E2_BD6C4515140A, null, false)"},{"colCount":24,"finalFrame":"first","frameDuration":41,"rowCount":1,"class":"AnimatedImageResource","id":"AnimatedImageResource_F10114A0_E169_0844_41D1_E218EB2C34C8","levels":[{"height":230,"class":"ImageResourceLevel","url":"media/res_F164565B_E169_08C4_41D7_03F8F4A74BDB_0.png","width":5520}],"frameCount":24},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_EF162867_E16B_18CC_41E0_CEE64CACA11F","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"colCount":24,"finalFrame":"first","frameDuration":41,"rowCount":1,"class":"AnimatedImageResource","id":"AnimatedImageResource_F106D4A2_E169_0844_41A4_7BF9F7CAA01C","levels":[{"height":230,"class":"ImageResourceLevel","url":"media/res_F164565B_E169_08C4_41D7_03F8F4A74BDB_0.png","width":5520}],"frameCount":24},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_EE51897E_E169_18BC_41E7_D3BAE595365F","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"}],"backgroundColor":["#999999"],"id":"rootPlayer","minHeight":0,"minWidth":0};
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
//Generated with v2023.1.11, Fri Sep 29 2023