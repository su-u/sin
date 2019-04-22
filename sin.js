draw_sin = function(id, data) {
    // 配列dataに入っている数値を描画する
    // idは描画するCanvas要素の名前
    // dataは数値の入っている配列
    var canvas = document.getElementById(id);
    var ctx = canvas.getContext('2d');

    const RAD = 180;
    // 描画
    ctx.beginPath();
    ctx.moveTo(0, 100);
    for (var i = 0; i < 360; i++) {
        ctx.lineTo(i, -data[i] * 100.0 + 100);
    }
    ctx.stroke();
};

calc_sin = function(freq, amp) {
    // sinの値を計算し，配列に格納
    // freqは周波数（全360サンプル）
    // ampは振幅（通常は1）
    var data = new Array(360);
    for (var i = 0; i < 360; i++) {
        data[i] = amp * Math.sin((freq * i * Math.PI) / 180.0);
    }
    return data;
};
