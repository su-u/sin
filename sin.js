draw_sin = function(id, data) {
    // 配列dataに入っている数値を描画する
    // idは描画するCanvas要素の名前
    // dataは数値の入っている配列
    var canvas = document.getElementById(id);
    canvas.width = 360;
    canvas.height = 300;
    var ctx = canvas.getContext('2d');

    // 描画
    ctx.beginPath();
    var half = canvas.height / 2;
    ctx.moveTo(0, half);
    for (var i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, -data[i] * 100.0 + half);
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

add_sin = function(data1, data2, ...data3) {
    var sindata = new Array(360);
    for (var i = 0; i < 360; i++) {
        sindata[i] = data1[i] + data2[i];
    }
    data3.forEach(function(item) {
        for (var i = 0; i < 360; i++) {
            sindata[i] = sindata[i] + item[i];
        }
    });
    return sindata;
};
