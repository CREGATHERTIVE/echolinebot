var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1626636344',
  channelSecret: '2b4b2d872d23cac755aa3d0842aa6b19',
  channelAccessToken: 'fLQm+fNKJawBODZ9eL0TxcPTvyJf/v9fxFEHNQ9EH+vBb8BItOfbIyddsoc4jtbt5IHjVdumQGJlKH/CqVJ57Erx2Y4TcdJpVBb5nTCDPjGW+7zRnuyROetK38I2WpECTOiMsp7iJLMXPm0OlaJqHwdB04t89/1O/w1cDnyilFU='
});

//這一段的程式是專門處理當有人傳送文字訊息給LineBot時，我們的處理回應
bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
  //收到文字訊息時，直接把收到的訊息傳回去
    event.reply(msg).then(function(data+"HI") {
      // 傳送訊息成功時，可在此寫程式碼 
      console.log(msg);
    }).catch(function(error) {
      // 傳送訊息失敗時，可在此寫程式碼 
      console.log('錯誤產生，錯誤碼：'+error);
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log('目前的port是', port);
});
