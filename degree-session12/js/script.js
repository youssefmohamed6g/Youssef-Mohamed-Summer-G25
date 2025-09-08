var degree = prompt("please enter your degree")
if (degree == null || degree == "") console.log("plese enter your degree")
else{
    if(degree > 100 || degree < 0) console.log("plese enter your correct degree")
else if (degree <= 100 && degree >= 90) console.log("you git a degree (A)")
else if (degree < 90 && degree >= 80) console.log("you git a degree (B)")
else if (degree < 80 && degree >= 70) console.log("you git a degree (C)")
else if (degree < 70 && degree >= 0) console.log("you git a degree (F)")
else console.log("plese enter your correct degree")
}


