export const $ = (s, root=document) => root.querySelector(s);
export const $$ = (s, root=document) => [...root.querySelectorAll(s)];

export function filePicker(input, dropzone, callback){
  const handle = files => { if(files && files.length) callback(files); };
  input.addEventListener("change", e => handle(e.target.files));
  ["dragover","dragenter"].forEach(ev=>dropzone.addEventListener(ev,e=>{e.preventDefault();dropzone.classList.add("drag");}));
  ["dragleave","drop"].forEach(ev=>dropzone.addEventListener(ev,e=>{e.preventDefault();dropzone.classList.remove("drag");}));
  dropzone.addEventListener("drop", e=>handle(e.dataTransfer.files));
}
export function downloadBlob(blob, filename){
  const url=URL.createObjectURL(blob); const a=document.createElement("a");
  a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
export function loadImage(file){
  return new Promise((resolve,reject)=>{
    const url=URL.createObjectURL(file), img=new Image();
    img.onload=()=>{URL.revokeObjectURL(url);resolve(img)}; img.onerror=reject; img.src=url;
  });
}
export function canvasBlob(canvas,type="image/png",quality=.9){
  return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error("Could not create image")),type,quality));
}
export function setStatus(el,msg,type=""){
  el.textContent=msg; el.className="status "+type;
}
export function safeName(name){return name.replace(/\.[^.]+$/,"").replace(/[^a-z0-9_-]+/gi,"-")||"file";}
