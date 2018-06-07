export default function(){
  return {
    set_thumbnail(state, thumbnail){
      state.thumbnail = thumbnail
    },
    set_author(state, author){
      state.author = author
    },
    set_content(state, content){
      state.content = content
    },
    set_previewText(state, text){
      state.previewText = text
    },
    set_id(state, id){
      state.id = id
    }
  }
}