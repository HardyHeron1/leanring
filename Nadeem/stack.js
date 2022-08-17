s = "){}[]";
let a = [];
for (let i of s) {
    if (a[0] == ")" || a[0] == "}" || a[0] == "]") {
        console.log(false)
        return false;
    }

    else if (i == "(" || i == "[" || i == "{") {
        a.push(i);
    }

    else if ((i == ")" && a[a.length - 1] == "(") || (i == "]" && a[a.length - 1] == "[")
        || (i == "}" && a[a.length - 1] == "{")) {
        if (a.length == 0) {
            return false;
        }
        else {
            a.pop();
        }
    }

}
if (a.length == 0) {
    console.log(true);
}
else {
    console.log(false);
}