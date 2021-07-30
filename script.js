krs=document.getElementById("Reset1")
kps=document.getElementById("PreviousSlide1")
kns=document.getElementById("NextSlide1")
rrs=document.getElementById("Reset2")
rps=document.getElementById("PreviousSlide2")
rns=document.getElementById("NextSlide2")
var ktracking="1";
var rtracking="1";

function nextslide1()
{
  pic=document.getElementById("kauai");
  if (ktracking=="1")
  {
    ktracking="2";
  }
  else if (ktracking=="2")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d2-270ec9460be0e573e81c06cadba442fd/views/imgpsh_fullsize_anim";
    ktracking="3"
    }
  else if (ktracking=="3")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d7-5de5bdd63a25b10417ec2c163e7f5370/views/imgpsh_fullsize_anim";
    ktracking="4"
    }
    else if (ktracking=="4")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d9-b8ba0373bd8f13bce738eb6e35f2c87b/views/imgpsh_fullsize_anim";
    ktracking="5"
    }
    else if (ktracking=="5")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d2-670c44bb009c7a0b5b8102bbc387fd37/views/imgpsh_fullsize_anim";
    ktracking="6"
    }
  else if (ktracking=="6")
    {
      pic.src="https://api.asm.skype.com/v1/objects/0-wus-d5-7903087401c8d7b0e3acd0ff24e12c5b/views/imgpsh_fullsize_anim";
    }
}
kns.onclick=nextslide1;
function previousslide1()
{
  pic= document.getElementById("kauai")
  if (ktracking=="2")
  {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d1-6e8388fb572c7691f444000a60f6b2c7/views/imgpsh_fullsize_anim";
    ktracking="1";
  }
  else if (ktracking=="3")
  {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d2-270ec9460be0e573e81c06cadba442fd/views/imgpsh_fullsize_anim";
    ktracking="2";
  }
  else if (ktracking=="4")
  {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d7-5de5bdd63a25b10417ec2c163e7f5370/views/imgpsh_fullsize_anim";
    ktracking="3";
  }
  else if (ktracking=="5")
  {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d9-b8ba0373bd8f13bce738eb6e35f2c87b/views/imgpsh_fullsize_anim";
    ktracking="4";
  }
  else if (ktracking=="6")
  {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d2-670c44bb009c7a0b5b8102bbc387fd37/views/imgpsh_fullsize_anim";
    ktracking="5";
  }
}
kps.onclick=previousslide1;
function reset1()
{
pic=document.getElementById("kauai")
pic.src="https://api.asm.skype.com/v1/objects/0-wus-d1-6e8388fb572c7691f444000a60f6b2c7/views/imgpsh_fullsize_anim";
ktracking="1";
}
krs.onclick=reset1;
function nextslide2()
{
 pic=document.getElementById("Mt.Ranier");
  if (rtracking=="1")
  {
    rtracking="2";
  }
  else if (rtracking=="2")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d8-bad7ea162bc48db511237b6ef2648e65/views/imgpsh_fullsize_anim";
    rtracking="3"
    }
  else if (rtracking=="3")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d7-6d4de49fbe5fa7f6b0b1e18c54b075b1/views/imgpsh_fullsize_anim";
    rtracking="4"
    }
    else if (rtracking=="4")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d6-6782b7749d2789c1c18a693d73a29929/views/imgpsh_fullsize_anim";
    rtracking="5"
    }
    else if (rtracking=="5")
    {
    pic.src="https://api.asm.skype.com/v1/objects/0-wus-d4-fd6643cc9250634d39c7ef1c2d364f53/views/imgpsh_fullsize_anim";
    }

}

