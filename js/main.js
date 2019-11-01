$(document).ready(function(){
	//code here...
	var atomSelector = document.getElementById('atomEditor');
	window.editor = CodeMirror.fromTextArea(atomSelector, {
		mode: 'javascript',
		theme: 'one-dark 1.1.1',
		indentUnit: 4,
		smartIndent: true,
		tabSize: 4,
		indentWithTabs: true,
		lineWrapping: true,
		lineNumbers: true,
		firstLineNumber:1,
		fixedGutter:true,
		scrollbarStyle: null,
		coverGutterNextToScrollbar:true,
		inputStyle: "textarea",
		readOnly: false,
		showCursorWhenSelecting: false,
		lineWiseCopyCut: true,
		pasteLinesPerSelection:true,
		undoDepth:200,
		historyEventDelay:1250,
		tabindex:1,
		autofocus: true,
	});
	var atomPreviewSelector = document.getElementById('atomEditorPreview');
	window.editor = CodeMirror.fromTextArea(atomPreviewSelector, {
		mode: 'javascript',
		theme: 'one-dark 1.1.1',
		indentUnit: 4,
		smartIndent: true,
		tabSize: 4,
		indentWithTabs: true,
		lineWrapping: true,
		lineNumbers: true,
		firstLineNumber:1,
		fixedGutter:true,
		scrollbarStyle: null,
		coverGutterNextToScrollbar:true,
		inputStyle: "textarea",
		readOnly: 'nocursor',
		showCursorWhenSelecting: false,
		lineWiseCopyCut: true,
		pasteLinesPerSelection:true,
		undoDepth:200,
		historyEventDelay:1250,
		tabindex:1,
		autofocus: false,
		showCursorWhenSelecting: true
	});
});
