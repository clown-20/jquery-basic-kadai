$('#change-color').on({
  'click': () => {
    // 文字色を赤 
    $('#target').css('color', 'red');
  },
});
  
$('#change-text').on({
    'click': () => {
   // 文字を変更 
   $('#target').text('こんばんわ！');
  },
});

$('#fade-out').on({
  'click': () => {
 // 文字をフェードアウト
 $('#target').fadeOut();
},
});

$('#fade-in').on({
  'click': () => {
 // 文字をフェードイン 
 $('#target').fadeIn();
},
});