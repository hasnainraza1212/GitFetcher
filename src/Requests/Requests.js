export const host = "https://api.github.com/"
const requestHeaders = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + "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",
  };
  const request = {
    method: "GET",
    contentType: "application/json",
    headers: requestHeaders,
  };

export const Get = async(URl, request)=>{
    try{
        const res = await fetch(host+URl, request)
        return res
    }catch(err){
        throw new Error(err)
    }

}
