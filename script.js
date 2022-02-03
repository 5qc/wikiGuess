window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " fade-out";
    setTimeout(function() {
        $(".loader").remove();
    }, 1000);
}); 

$(document).ready(function() {
    // Some Stuff
    $("#result").addClass("hide");

    // Make Intro Functionable
    $("#start").click(function() {
        $("#intro").addClass("fade-out");
        setTimeout(function() {
            $("#game").addClass("fade-in").removeClass("hide");
        }, 1000);
    });
    $("#how-to").click(function() {
        $("#intro").addClass("fade-out");
        setTimeout(function() {
            $("#instructions").addClass("fade-in").removeClass("hide");
        }, 1000);
    })
    $("#how-to-back").click(function() {
        $("#instructions").addClass("fade-out").removeClass("fade-in");
        setTimeout(function() {
            $("#intro").addClass("fade-in").removeClass("fade-out");
            $("#instructions").addClass("hide").removeClass("fade-in fade-out");
        }, 1000);
    })

    // Actual Game
    $.getJSON("data.json", function(data) {
        var points = 0;

        function what() {
            return data[Math.floor(Math.random() * data.length)]
        }
        function image(link) {
            return "https://www.wikihow.com/images/" + link;
        }
        function selectThem() {
            var selection = "#select1, #select2, #select3, #select4, #select5, #select6, #select7, #select8, #select9, #select10, #select11, #select12, #select13, #select14, #select15, #select16, #select17, #select18, #select19, #select20, #select21";
            $(selection).hide();
            if (item["img2"] !== undefined) {$("#select1, #select2").show();}
            if (item["img3"] !== undefined) {$("#select3").show();}
            if (item["img4"] !== undefined) {$("#select4").show();}
            if (item["img5"] !== undefined) {$("#select5").show();}
            if (item["img6"] !== undefined) {$("#select6").show();}
            if (item["img7"] !== undefined) {$("#select7").show();}
            if (item["img8"] !== undefined) {$("#select8").show();}
            if (item["img9"] !== undefined) {$("#select9").show();}
            if (item["img10"] !== undefined) {$("#select10").show();}
            if (item["img11"] !== undefined) {$("#select11").show();}
            if (item["img12"] !== undefined) {$("#select12").show();}
            if (item["img13"] !== undefined) {$("#select13").show();}
            if (item["img14"] !== undefined) {$("#select14").show();}
            if (item["img15"] !== undefined) {$("#select15").show();}
            if (item["img16"] !== undefined) {$("#select16").show();}
            if (item["img17"] !== undefined) {$("#select17").show();}
            if (item["img18"] !== undefined) {$("#select18").show();}
            if (item["img19"] !== undefined) {$("#select19").show();}
            if (item["img20"] !== undefined) {$("#select20").show();}
            if (item["img21"] !== undefined) {$("#select21").show();}
            $("#select1").click(function() {$(".image").attr("src", img);});
            $("#select2").click(function() {$(".image").attr("src", image(item["img2"]));});
            $("#select3").click(function() {$(".image").attr("src", image(item["img3"]));});
            $("#select4").click(function() {$(".image").attr("src", image(item["img4"]));});
            $("#select5").click(function() {$(".image").attr("src", image(item["img5"]));});
            $("#select6").click(function() {$(".image").attr("src", image(item["img6"]));});
            $("#select7").click(function() {$(".image").attr("src", image(item["img7"]));});
            $("#select8").click(function() {$(".image").attr("src", image(item["img8"]));});
            $("#select9").click(function() {$(".image").attr("src", image(item["img9"]));});
            $("#select10").click(function() {$(".image").attr("src", image(item["img10"]));});
            $("#select11").click(function() {$(".image").attr("src", image(item["img11"]));});
            $("#select12").click(function() {$(".image").attr("src", image(item["img12"]));});
            $("#select13").click(function() {$(".image").attr("src", image(item["img13"]));});
            $("#select14").click(function() {$(".image").attr("src", image(item["img14"]));});
            $("#select15").click(function() {$(".image").attr("src", image(item["img15"]));});
            $("#select16").click(function() {$(".image").attr("src", image(item["img16"]));});
            $("#select17").click(function() {$(".image").attr("src", image(item["img17"]));});
            $("#select18").click(function() {$(".image").attr("src", image(item["img18"]));});
            $("#select19").click(function() {$(".image").attr("src", image(item["img19"]));});
            $("#select20").click(function() {$(".image").attr("src", image(item["img20"]));});
            $("#select21").click(function() {$(".image").attr("src", image(item["img21"]));});
        }

        var item = what();
        var img  = "https://www.wikihow.com/images/" + item["img"]
        var ans  = item["answer"]
        
        $(".image").attr("src", img);
        $(".correct-answer").html(ans);
        
        selectThem();

        // Key Press Code (And Reset)
        $("#start").click(function() {
            item = "";
            item = what();
            img = "";
            img  = "https://www.wikihow.com/images/" + item["img"];
            ans = "";
            ans  = item["answer"];
            selectThem();
            $(".image").attr("src", img);
            $(".correct-answer").html(ans);
        })

        $("#input").keypress(function(event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            var val = $("#input").val().replace("\n", "");
            if (keycode == 13) {
                answer = $("#input").val().replace(/^how to /gi, "").toLowerCase();

                if (answer == item["answer"].toLowerCase()) {
                    points += 1;
                }

                $(".your-answer").html(answer);
                $(".your-answer, .correct-answer-text, .correct-answer").removeClass("fade-in");
                $(".result").removeClass("fade-out");
    
                setTimeout(function() {
                    $("#input").val(val);
                }, 1);
    
                $("#guess").addClass("fade-out[0.5]");
                $(".your-answer, .correct-answer-text, .correct-answer").addClass("opacity[0]");

                setTimeout(function() {
                    $("#guess").addClass("remove");
                    $("#result").addClass("fade-in[0.5]");
                    $("#result").removeClass("hide");
    
                    setTimeout(function() {
                        $(".your-answer").removeClass("opacity[0]").addClass("fade-in");
    
                        setTimeout(function() {
                            $(".correct-answer-text").removeClass("opacity[0]").addClass("fade-in");
    
                            setTimeout(function() {
                                $(".correct-answer").removeClass("opacity[0]").addClass("fade-in");
                            
                                setTimeout(function() {
                                    $(".result").addClass("fade-out");
                                    item = "";
                                    item = what();
                                    img = "";
                                    img  = "https://www.wikihow.com/images/" + item["img"];
                                    ans = "";
                                    ans  = item["answer"];
                                    selectThem();
                                    $(".image").attr("src", img);
    
                                    setTimeout(function() {
                                        $(".result").addClass("hide");
                                        $(".guess").removeClass("remove fade-out[0.5]").addClass("fade-in");
                                        $("#input").val("");

                                        setTimeout(function() {
                                            $(".correct-answer").html(ans);
                                        }, 100);
                                    }, 1000);
                                }, 3000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 500);
            }
        });

        // Stop game when button is clicked
        $("#stop-game").click(function() {
            if (points == 1) {
                $("#points").html(points + " point");
            } else {
                $("#points").html(points + " points");
            }

            $("#game").addClass("fade-out");
            setTimeout(function() {
                $("#game").addClass("hide").removeClass("fade-out");
                $("#game-results").removeClass("hide").addClass("fade-in");

                setTimeout(function() {
                    $("#game-results").removeClass("fade-in");
                }, 1000);
            }, 1000);
        });
        $("#play-again").click(function() {
            points = 0;

            $("#game-results").addClass("fade-out");
            $("#intro").removeClass("fade-out").addClass("hide");
            setTimeout(function() {
                $("#game-results").removeClass("fade-out").addClass("hide");
                $("#intro").addClass("fade-in").removeClass("hide");

                setTimeout(function() {
                    $("#intro").removeClass("fade-in");
                }, 1000);
            }, 1000);
        });
    });
});
