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
var script = {"id":"rootPlayer","scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"class":"Player","propagateClick":false,"children":["this.MainViewer"],"data":{"defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"rate":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false},"name":"Player760","history":{}},"scripts":{"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"getPixels":TDV.Tour.Script.getPixels,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"downloadFile":TDV.Tour.Script.downloadFile,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"executeJS":TDV.Tour.Script.executeJS,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"createTween":TDV.Tour.Script.createTween,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"init":TDV.Tour.Script.init,"translate":TDV.Tour.Script.translate,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setLocale":TDV.Tour.Script.setLocale,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"mixObject":TDV.Tour.Script.mixObject,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlays":TDV.Tour.Script.getOverlays,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"clone":TDV.Tour.Script.clone,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setValue":TDV.Tour.Script.setValue,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"registerKey":TDV.Tour.Script.registerKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"existsKey":TDV.Tour.Script.existsKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout},"backgroundColorRatios":[0],"scrollBarColor":"#000000","gap":10,"layout":"absolute","width":"100%","hash": "27aaca66c7eacbacf13feb19d485fd660d2989813a61bb4691ef9c4262da3e8f", "definitions": [{"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate"},{"id":"panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63","label":trans('panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63.label'),"frames":[{"cube":{"levels":[{"height":2560,"colCount":30,"tags":"ondemand","url":"media/panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":5,"width":15360},{"height":1536,"colCount":18,"tags":"ondemand","url":"media/panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":3,"width":9216},{"height":1024,"colCount":12,"tags":"ondemand","url":"media/panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_t.jpg","class":"CubicPanoramaFrame"}],"class":"Panorama","thumbnailUrl":"media/panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_t.jpg","hfovMax":130,"data":{"label":"R0020209_HDR"},"hfov":360,"hfovMin":"135%","vfov":180},{"id":"mainPlayList","class":"PlayList","items":[{"camera":"this.panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_camera","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63"}]},{"id":"panorama_F44D9898_FF46_01ED_41E4_F3DAA11F5B63_camera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_F44A5081_FF46_01DF_41D3_70AE58FB0677","class":"PanoramaCamera"},{"id":"MainViewer","progressLeft":"33%","class":"ViewerArea","propagateClick":false,"subtitlesFontFamily":"Arial","data":{"name":"Main Viewer"},"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderRadius":0,"playbackBarHeight":10,"vrPointerSelectionTime":2000,"subtitlesTextShadowOpacity":1,"toolTipFontColor":"#606060","width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadBorderRadius":0,"height":"100%","subtitlesFontColor":"#FFFFFF","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"minWidth":100,"toolTipFontFamily":"Arial","progressBackgroundColorRatios":[0],"progressRight":"33%","toolTipBorderColor":"#767676","progressOpacity":0.7,"playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"toolTipTextShadowColor":"#000000","subtitlesBottom":50,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBackgroundColor":["#000000"],"subtitlesTop":0,"playbackBarBorderSize":0,"toolTipPaddingRight":6,"subtitlesTextShadowColor":"#000000","toolTipPaddingTop":4,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadWidth":6,"progressBorderSize":0,"progressBottom":10,"progressHeight":2,"subtitlesFontSize":"3vmin","firstTransitionDuration":0,"playbackBarHeadHeight":15,"playbackBarProgressBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","progressBarBorderRadius":2,"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingLeft":6,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"playbackBarRight":0},{"id":"sequence_F44A5081_FF46_01DF_41D3_70AE58FB0677","movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"class":"PanoramaCameraSequence"}],"height":"100%","minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"minWidth":0,"start":"this.init()","watermark":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.9.js.map
})();
//Generated with v2023.0.9, Tue May 9 2023