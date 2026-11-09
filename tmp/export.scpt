tell application "Keynote Creator Studio"
  activate
  set d to open POSIX file "/Users/daneyand/Documents/bob/AI101-openSlide/AI-101-blue-complete.pptx"
  delay 8
  export d to POSIX file "/Users/daneyand/Documents/bob/AI101-openSlide/tmp/orig" as slide images with properties {image format:PNG}
  close d saving no
end tell
