import emojiNote from "./emojipedia";

const Str= emojiNote.map((string)=>{
    return string.meaning.substring(0,101+" \n");

});
console.log(Str);

export default Str;