/* css/common.js */
 
/* 도화지 크기 설정 */
html, body { padding: 0; margin: 0; width: 100%; height: 100%; }
 
/* 공이 자유자재로 움직일 수 있도록 position을 'absolute'로 설정 */
.ball { position: absolute; }
/* 공을 선택했을 때, 그림자가 생기도록 설정 */
.ball:hover { box-shadow: 0 0 10px 0 darkgray; cursor: pointer; }
 
/* 공의 색상 설정 */
.green { background-color: lightgreen; }
.blue { background-color: lightblue; }
.pink { background-color: lightpink }
 
/* 공의 크기 설정 */
.s200 { width: 200px; height: 200px; border-radius: 200px; }
.s100 { width: 100px; height: 100px; border-radius: 100px; }
.s50 { width: 50px; height: 50px; border-radius: 50px; }
