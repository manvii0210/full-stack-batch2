function process()
{
    var n=document.getElementById("t1").value;
    n=n.toUpperCase();
   var len=n.length;
   var rev="",i;
   for(i=len-1;i>=0;i--)
   {
    rev=rev+n[i];
   }
   if(n==rev)
   {
    document.getElementById("sp").innerHTML="the string is palindrome"
   }
   else{
    document.getElementById("sp").innerHTML="the string is not palindrome"
   }
}