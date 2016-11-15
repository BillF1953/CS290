/**
 * Created by  Tyler Forrester on 10/25/16.
 */
function table() {
    var body = document.getElementsByTagName("body")[0];


    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var row1 = document.createElement("tr");
    for (var k = 0; k < 4; k++) {
        var header = document.createElement("TH");
        headerText = document.createTextNode("Header " + (k + 1) + " ");
        header.appendChild(headerText);
        row1.appendChild(header);
    }
    tblBody.appendChild(row1);
    // creating all cells
    for (var i = 0; i < 3; i++) {

        var row = document.createElement("tr"); // table tuple
        for (var j = 0; j < 4; j++) {

            var cell = document.createElement("td");
            cell.style.border = "solid";
            cell.style.borderWidth = "2px";
            if (j == 0 && i == 1) {

                index(cell); // cell is an element "td"
            }

            var cellText = document.createTextNode((j + 1) + ", " + (i + 1));
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // add the row to the end of the table body
        tblBody.appendChild(row);
    }


    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "3");


    function index(ij) {
        var index1 = ij;
        index1.style.border = "solid";
        index1.style.borderWidth = "5px";
        index1.id = "football";
        return index1;
    }

    function unIndex(ij) {

        ij.style.border = "solid";
        ij.style.borderWidth = "2px";
        ij.removeAttribute("id");

    }


    var r = function right() {

        fball = document.getElementById("football");

        if (fball.nextElementSibling) {
            unIndex(fball);
            index(fball.nextElementSibling);
        }

    };


    var l = function left() {

        fball = document.getElementById("football");
        if (fball.previousElementSibling) {
            unIndex(fball);
            index(fball.previousElementSibling);
        }
    };

    var d = function down() {

        fball = document.getElementById("football");

        for (var w = 0; w < fball.parentNode.children.length; w++) {

            console.log(fball.parentNode.children[w].tagName);
            if (fball.parentNode.children[w].id) {

                var position = w;
                break;
            }


        }
        if (fball.parentNode.nextElementSibling) {
            for (var e = 0; e < fball.parentNode.nextElementSibling.children.length; e++) {

                console.log(fball.parentNode.nextElementSibling.children[e].tagName);
                if (position == e) {
                    unIndex(fball);
                    index(fball.parentNode.nextElementSibling.children[e]);
                    break;
                }


            }
        }


    };


    var u = function up() {

        fball = document.getElementById("football");

        for (var w = 0; w < fball.parentNode.children.length; w++) {

            console.log(fball.parentNode.children[w].tagName);
            if (fball.parentNode.children[w].id) {

                var position = w;
                break;
            }


        }

        if (fball.parentNode.previousElementSibling.firstElementChild.tagName != "TH" && fball.parentNode.previousElementSibling) {
            for (var e = 0; e < fball.parentNode.previousElementSibling.children.length; e++) {

                if (position == e) {
                    unIndex(fball);
                    index(fball.parentNode.previousElementSibling.children[e]);
                    break;
                }


            }
        }

    };

    var m = function markCell() {

        fball = document.getElementById("football");
        fball.style.backgroundColor = "yellow";

    };

    function button(dir, fun) {

        var button = document.createElement("button");
        button.addEventListener('click', fun);
        button.appendChild(document.createTextNode(dir));
        body.appendChild(button);


    }


    button("Left", l);
    button("Right", r);
    button("Up", u);
    button("Down", d);
    button("Mark Cell", m);


}

table();