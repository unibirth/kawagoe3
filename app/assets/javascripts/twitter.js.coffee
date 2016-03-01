$ ->
  loadTwitterSDK()
  $(document).on 'page:change', renderTimelines

loadTwitterSDK = ->
  $.getScript "//platform.twitter.com/widgets.js", ->
    renderTimelines()

renderTimelines = ->
  $('.twitter-timeline-container').each ->
    $container = $(this)
    widgetId = $container.data 'widget-id'
    $container.empty()
    twttr.widgets.createTimeline widgetId, $container[0]
