Page({
  data: {
    value: '',
    phoneNumber: '',
    ID: '',
    password: '',
    userName: '',
    inputValue: '',
    inputValue1: '',
    inputValue2: '显示焦点',
    inputValue3: '',
    textareaValue: '',
    textareaValue1: '显示焦点',
    textareaValue2: '',
  },
  inputChange(event) {
    console.log(event.detail.value);
  },
  lineChange(e) {
    console.log(e.detail.lineCount);
  },
  focusChange(e) {
    console.log('focus', e);
  },
  blurChange(e) {
    console.log('blur', e);
  },
  inputFocusChange(e) {
    console.log('input-focus', e);
  },
  inputBlurChange(e) {
    console.log('input-blur', e);
  },
});
