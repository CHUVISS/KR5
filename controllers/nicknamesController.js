let history = [];

const adjectives = ["Dark","Happy","Crazy","Silent","Cyber","Red","Frost","Wild"];
const nouns = ["Wolf","Ninja","Shadow","Fox","Knight","Ghost","Bear","Robot"];

function random(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

export const generateNickname = (req,res)=>{
  const { style, length } = req.query;
  let nickname = "";
  switch(style){
    case "cute": nickname="Cute"+random(nouns); break;
    case "aggressive": nickname="Xx_"+random(adjectives)+random(nouns)+"_xX"; break;
    case "tech": nickname="Neo"+random(nouns)+Math.floor(Math.random()*999); break;
    default: nickname=random(adjectives)+random(nouns);
  }
  if(length) nickname = nickname.substring(0, Number(length));
  history.push(nickname);
  res.json({ nickname });
};

export const getHistory = (req,res)=> res.json({ history });
export const clearHistory = (req,res)=>{ history=[]; res.json({message:"History cleared"}); };
