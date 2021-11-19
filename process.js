
            function operator(userInput1) {
                let text1 = document.getElementById("userInput1").value;
                let output1 = document.getElementById("output1");
                let output2 = document.getElementById("output2");
                let output3 = document.getElementById("output3");
                let output4 = document.getElementById("output4");
                let output5 = document.getElementById("output5");
                //Hitung jumlah huruf
                let charNum = text1.trim().split(" ").join("").length;
                output1.innerHTML= "Jumlah huruf: " + charNum ;
                //Hitung jumlah kata
                let wordNum = [];
                wordNum = text1.split(" ").length;
                output2.innerHTML= "Jumlah kata: " + wordNum ;
                //Hitung vokal
                let vowels = "aiueoAIUEO";
                let vowNum = 0;
                for (let i = 0; i < text1.length; i++) {
                    if (vowels.includes(text1[i])){
                        vowNum++;
                    }
                }
                output3.innerHTML= "Jumlah vokal: " + vowNum;

                //Vokal -> angka berurutan
                let vowChange = "";
                let a = 1;
                vowChange = text1.replace(/[aiueoAIUEO]/ig,(m,j) => a++);
                output4.innerHTML = "Vokal -> Angka : " + vowChange;

                //Vokal -> angka fibonacci
                let vowFibChange;
                let k = 0;
                let fib1 = 0, fib2 = 1;
                let fibAdd;
                let fibResult = [];
                for(let k in text1){
                    if (vowels.includes(text1[k])){
                        vowFibChange = fib1 + fib2;
                        fibAdd = text1[k].replace(text1[k],fib1.toString());
                        fibResult.push(fibAdd);
                        fib1 = fib2;
                        fib2 = vowFibChange;
                    }
                    else{
                        fibResult.push(text1[k]);
                    }
                }
                output5.innerHTML = "Vokal -> FibNum : " + fibResult.join("");
                
                //Middle char to *
                let text2 = text1.split(" ");
                let textLength;
                let starArray = [];
                for(let i in text2){
                    for(k in text2[i]){
                        textLength = text2[i].length;
                        if(k == 0 || k == (textLength-1)){
                            starArray.push(text2[i][k]);
                        }
                        else{
                            starArray.push("*");
                        }
                    }
                    starArray.push(" ");
                }
                output6.innerHTML= "Mid char to *: " + starArray.join("");

            }