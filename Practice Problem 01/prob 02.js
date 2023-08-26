// write the folowing sentence in three lines and  print the result :
// I am a Web developer. L love to code. I love to eat biriyani.

var textt = "hello. how Are you . where are you going";

for (const x of textt.split('. ')) {
    console.log(x);
}