import { useRef,useState } from "react";

const DiaryEditor = () => {
    const authorInput = useRef();
    const contentInput = useRef();
    const [state,setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    });
    const handleChange =(e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();
            return ;
        }
        if(state.content.length < 5){
            contentInput.current.focus();
            return ;
        }
        alert("저장 성공 :)");
    };
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input value={state.author}
                    ref={authorInput}
                    onChange={handleChange}
                    type="text"
                    placeholder="title"
                    name="author"
                />
                <div>
                    <textarea value={state.content}
                        ref={contentInput}
                        onChange={handleChange}
                        type="text"
                        name="content"       
                    />
                </div>
                <div>
                    <strong>오늘의 감정지수 : </strong>
                    <select value={state.emotin} 
                        name="emotion"
                        onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <button type="submit"
                    onClick={handleSubmit}
                >일기 저장하기</button>
            </div>
        </div>
            
    );
};

export default DiaryEditor;