for (var i = 1; i <= 20; i++) {
    console.log(i);
}


for (var i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


var i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}


var names = ["Sara", "Omar", "Mona", "Youssef"];
for (var name of names) {
    console.log(name);
}


for (var i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}


for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}


for (var i = 1; i <= 30; i++) {
    if (i == 25) {
        break;
    }
    if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}
