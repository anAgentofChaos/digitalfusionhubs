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
var script = {"minWidth":0,"scrollBarMargin":2,"start":"this.init()","data":{"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"rate":1},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"history":{},"name":"Player540"},"layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"hash": "830ee7da584446a12cdab8728b7d4787f40aa0b8f8ebb056e72476f6dc5a5782", "definitions": [{"class":"Panorama","vfov":180,"hfov":360,"hfovMax":130,"label":trans('panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54.label'),"hfovMin":"135%","thumbnailUrl":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_t.jpg","overlays":["this.overlay_EF8BD8A4_E14E_3463_4178_0B173290BC0D"],"data":{"label":"SWMroomcam6_A"},"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/0/{row}_{column}.jpg","rowCount":4,"colCount":24,"height":2048,"width":12288},{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/1/{row}_{column}.jpg","rowCount":2,"colCount":12,"height":1024,"width":6144},{"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/2/{row}_{column}.jpg","rowCount":1,"colCount":6,"height":512,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_0/{face}/vr/0.jpg","rowCount":1,"colCount":6,"height":1536,"width":9216}]}}],"id":"panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54"},{"subtitlesBackgroundOpacity":0.2,"progressOpacity":0.7,"toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","toolTipFontSize":"1.11vmin","minHeight":50,"toolTipPaddingTop":4,"subtitlesFontFamily":"Arial","firstTransitionDuration":0,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingLeft":6,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColor":["#000000"],"subtitlesGap":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":2,"playbackBarProgressBorderColor":"#000000","width":"100%","progressBarBorderSize":0,"progressBorderSize":0,"playbackBarBorderRadius":0,"toolTipFontColor":"#606060","progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6","subtitlesBackgroundColor":"#000000","playbackBarBackgroundOpacity":1,"height":"100%","progressBarBorderColor":"#000000","subtitlesTextShadowOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"subtitlesTextShadowHorizontalLength":1,"progressLeft":"33%","id":"MainViewer","playbackBarLeft":0,"playbackBarHeight":10,"subtitlesFontColor":"#FFFFFF","progressBottom":10,"playbackBarHeadBorderSize":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"subtitlesBottom":50,"subtitlesTextShadowVerticalLength":1,"progressBorderColor":"#000000","progressHeight":2,"class":"ViewerArea","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"playbackBarHeadWidth":6,"playbackBarHeadBorderColor":"#000000","progressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"playbackBarProgressBorderSize":0,"progressRight":"33%","playbackBarBorderSize":0,"subtitlesTop":0,"propagateClick":false,"playbackBarRight":0,"toolTipBorderColor":"#767676","playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","minWidth":100,"playbackBarProgressBorderRadius":0,"toolTipTextShadowColor":"#000000"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54","camera":"this.panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_camera","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","displayPlaybackBar":true},{"closeButtonPaddingBottom":0,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"shadowHorizontalLength":3,"closeButtonPressedIconLineWidth":3,"minHeight":0,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"closeButtonBorderSize":0,"verticalAlign":"middle","closeButtonPressedBackgroundColorRatios":[],"headerBorderSize":0,"bodyBackgroundOpacity":0,"footerBackgroundColorDirection":"vertical","closeButtonRollOverBorderSize":0,"layout":"vertical","closeButtonPaddingRight":0,"closeButtonRollOverBackgroundOpacity":0,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"titleFontFamily":"Arial","closeButtonPressedBorderColor":"#000000","modal":true,"headerPaddingLeft":10,"closeButtonRollOverBorderColor":"#000000","closeButtonPaddingLeft":0,"closeButtonBackgroundColorRatios":[],"closeButtonBackgroundOpacity":0,"titlePaddingBottom":5,"shadow":true,"data":{"name":"Window4556"},"headerPaddingBottom":5,"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"headerBackgroundColorDirection":"vertical","titleFontSize":"1.29vmin","closeButtonIconHeight":20,"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"scrollBarColor":"#000000","closeButtonRollOverBackgroundColorRatios":[],"closeButtonPressedBorderSize":0,"bodyPaddingRight":0,"closeButtonIconLineWidth":2,"width":"90%","headerVerticalAlign":"middle","titlePaddingRight":5,"horizontalAlign":"center","footerHeight":5,"height":"90%","closeButtonPaddingTop":0,"bodyBackgroundColorDirection":"vertical","bodyBorderSize":0,"bodyBorderColor":"#000000","headerBorderColor":"#000000","footerBorderSize":0,"backgroundColorRatios":[],"veilColorDirection":"horizontal","closeButtonBorderRadius":11,"id":"window_F39093C7_E14E_342D_41E2_BD6C4515140A","closeButtonBorderColor":"#000000","titleHorizontalAlign":"left","footerBackgroundOpacity":0,"shadowOpacity":0.5,"closeButtonIconColor":"#B2B2B2","veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"headerPaddingRight":0,"shadowColor":"#000000","titlePaddingTop":5,"children":["this.WebFrame_F3FCE7BD_E156_FC5D_41E8_0651A4500A78"],"titleFontColor":"#000000","footerBorderColor":"#000000","closeButtonRollOverIconColor":"#FFFFFF","closeButtonRollOverIconLineWidth":2,"shadowSpread":1,"closeButtonBackgroundColor":[],"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"bodyPaddingLeft":0,"shadowVerticalLength":0,"class":"Window","bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonPressedBackgroundOpacity":0,"veilColor":["#000000","#000000"],"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"closeButtonIconWidth":20,"veilColorRatios":[0,1],"bodyPaddingTop":0,"titlePaddingLeft":5,"bodyPaddingBottom":0,"borderRadius":5,"veilOpacity":0.4,"overflow":"scroll","propagateClick":false,"headerPaddingTop":10,"scrollBarMargin":2,"backgroundColor":[],"gap":10,"closeButtonPressedBackgroundColor":[],"headerBackgroundColorRatios":[0,0.09803921568627451,1],"closeButtonPressedIconColor":"#FFFFFF","minWidth":0,"closeButtonRollOverBackgroundColor":[],"headerBackgroundOpacity":0},{"class":"PanoramaCamera","id":"panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true},{"class":"HotspotPanoramaOverlay","rollOverDisplay":true,"areas":["this.HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB"],"useHandCursor":true,"maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","hfov":85.14,"distance":50,"data":{"label":"Polygon"},"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_EABB1D7B_E14A_0CE5_41E0_017925BC4C54_HS_8btlct9n.png","height":524,"width":1777}]},"pitch":9.63,"yaw":-0.92,"vfov":30.3}],"id":"overlay_EF8BD8A4_E14E_3463_4178_0B173290BC0D","data":{"label":"Polygon"}},{"minWidth":0,"data":{"name":"WebFrame5111"},"width":"100%","height":"100%","scrollEnabled":false,"class":"WebFrame","url":trans('WebFrame_F3FCE7BD_E156_FC5D_41E8_0651A4500A78.url'),"backgroundColorRatios":[],"propagateClick":false,"id":"WebFrame_F3FCE7BD_E156_FC5D_41E8_0651A4500A78","backgroundColor":[],"minHeight":0},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"image","toolTip":trans('HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB.toolTip'),"id":"HotspotPanoramaOverlayArea_EFB5F8CC_E14E_3423_41E8_67E8D9F3BAEB","click":"this.WebFrame_F3FCE7BD_E156_FC5D_41E8_0651A4500A78.set('url', this.translate('PopupWebFrameBehaviour_F39303C9_E14E_3425_41E1_FE80016975F3.url')); this.showWindow(this.window_F39093C7_E14E_342D_41E2_BD6C4515140A, null, false)"}],"width":"100%","scripts":{"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"showWindow":TDV.Tour.Script.showWindow,"setValue":TDV.Tour.Script.setValue,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"translate":TDV.Tour.Script.translate,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"clone":TDV.Tour.Script.clone,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"mixObject":TDV.Tour.Script.mixObject,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizStart":TDV.Tour.Script.quizStart,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlays":TDV.Tour.Script.getOverlays,"init":TDV.Tour.Script.init,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMainViewer":TDV.Tour.Script.getMainViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setLocale":TDV.Tour.Script.setLocale,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"unregisterKey":TDV.Tour.Script.unregisterKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"createTween":TDV.Tour.Script.createTween,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"existsKey":TDV.Tour.Script.existsKey,"registerKey":TDV.Tour.Script.registerKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver},"height":"100%","class":"Player","children":["this.MainViewer"],"scrollBarColor":"#000000","backgroundColorRatios":[0],"propagateClick":false,"gap":10,"id":"rootPlayer","backgroundColor":["#999999"],"watermark":false,"minHeight":0};
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