function find_chance() {
    var prices = document.getElementsByClassName("__currency");
    var case_p = prices[1].innerHTML
    case_p = case_p.replace(' ', '');
    case_p = Number(case_p);
    var k = 0;
    var plus_k = 0;
    var drop_max = 0;
    var drop_min = 100000;
    var drop_s = 0;
    for (let i = 2; i < prices.length; i++) {
        k = k + 1;
        var item_p = prices[i].innerHTML;
        item_p = item_p.replace(' ', '');
        item_p = Number(item_p);
        drop_s = drop_s + item_p;
        if (item_p>case_p) {
            plus_k = plus_k + 1;
        }
        if (item_p < drop_min) {
            drop_min = item_p;
        }
        if (item_p > drop_max) {
            drop_max = item_p;
        }
    }
    var drop_avg = Number((drop_s/k).toFixed(2));

    let doc = document.getElementById("case-box-app")
    new_div = document.createElement('p');
    new_div.innerHTML = 'Item count:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + k;
    new_div.style.cssText = "position: center; margin-top: 25px; margin-bottom: 10px;";
    doc.append(new_div);

    new_div = document.createElement('p');
    new_div.innerHTML = 'Profit chance:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + Number((plus_k*100/k).toFixed(2)) + '%';
    new_div.style.cssText = "position: center; margin-top: 5px; margin-bottom: 10px;";
    doc.append(new_div);

    new_div = document.createElement('p');
    new_div.innerHTML = 'Min drop price:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + drop_min;
    new_div.style.cssText = "position: center; margin-top: 5px; margin-bottom: 10px;";
    doc.append(new_div);

    new_div = document.createElement('p');
    new_div.innerHTML = 'Avg drop price:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + drop_avg;
    new_div.style.cssText = "position: center; margin-top: 5px; margin-bottom: 10px;";
    doc.append(new_div);

    new_div = document.createElement('p');
    new_div.innerHTML = 'Max drop price:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ' + drop_max;
    new_div.style.cssText = "position: center; margin-top: 5px; margin-bottom: 10px;";
    doc.append(new_div);
}
find_chance();
