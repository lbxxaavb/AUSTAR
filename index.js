const myLucky = new LuckyCanvas.LuckyWheel('#my-lucky', {
    width: '300px',
    height: '300px',
    blocks: [{ padding: '10px', background: '#869cfa' }],
    prizes: [
       { background: '#b8c5f2', fonts: [{ text: '谢谢惠顾' , top: '10%'}] ,range: 300},
      { background: '#e9e8fe', fonts: [{ text: '3d打印奖品1' , top: '10%'}],range: 5 },
      { background: '#b8c5f2', fonts: [{ text: '3d打印奖品2' , top: '10%'}],range: 4 },
      { background: '#e9e8fe', fonts: [{ text: '3d打印奖品3', top: '10%' }] ,range: 5},
      { background: '#b8c5f2', fonts: [{ text: '电路板' , top: '10%'}],range: 5 },
     { background: '#b8c5f2', fonts: [{ text: '钥匙扣', top: '10%' }] ,range: 8},
    { background: '#b8c5f2', fonts: [{ text: '再来一次' , top: '10%'}] ,range:150},

    ],

    buttons: [
      { radius: '40%', background: '#617df2' },
      { radius: '35%', background: '#afc8ff' },
      {
        radius: '30%', background: '#869cfa',
        pointer: true,
        fonts: [{ text: '开抽', top: '-10px' }]
      },
    ],
    defaultStyle: { fontSize: 20,wordWrap: true },
    start: function() {

       if (!this.counter) {
            this.counter = 1;
          } else {
            this.counter++;
          }


           myLucky.play()

                 setTimeout(_ => {
                   // 停止游戏
                   myLucky.stop()
                 }, 800)


    },
    end: function(prize) { // 游戏停止时触发
       var message = '恭喜你获得了: ' + prize.fonts[0].text;
       DialogHelper.showDialog(message,prize.fonts[0].text);
    }
  })
