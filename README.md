# 1일차 : 시맨틱 구조

1. 전체적인 시맨틱 구조의 형태
   1. ![시맨틱구조 이미지 검색결과](https://t1.daumcdn.net/cfile/tistory/244DE54F58B0258702)
2. header
   1. 소개나 탑색을 돕는 것의 그룹
   2. 보통 다른 요소의 맨 위쪽에 위치함
3. footer
   1. 작성자 구획, 저작권 데이터, 관련된 문서의 링크등을 포함
   2. 보통 맨 아래 있음
4. main
   1. body의 주요 콘텐츠를 나타냄
5. article
   1. 독립적으로 구분되거나 재사용 가능한 영역을 설정(매거진/신문 기사, 블로그 등)
   2. 일반적으로 h1 ~ h6태그를 포함하여 식별
   3. 작성일자와 시간을 time태그의 datetime 속성으로 작성
6. section
   1. 문서의 일반적인 영역을 설정
   2. 일반적으로 h1~h6태그를 포함하여 식별
   3. article는 독립적이고 재사용이 가능해야하지만 section은 그렇지 않아도 됨
7. aside
   1. 문서의 별도 콘텐츠를 설정(보통 광고나 기타 링크 등의 사이드바를 설정)
8. nav
   1. 다른 페이지 링크를 제공하는 영역을 설정(Navigation의 약자)
   2. 보통 메뉴(home, about, contact), 목차, 색인 등을 설정
9. address
   1. body, article, footer 등에서 연락처 정보를 제공하기 위해 포함하여 사용
10. div
    1. 본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정

<hr/>

#  고정형 웹 사이트 만들어보기

![image-20200316191015109](https://user-images.githubusercontent.com/50760015/76814732-f374ca80-683e-11ea-9593-f553c2989661.png)

## 위와 같은 웹 사이트를 만드는 순서



### 1. 구조 파악하기

1. 보통 웹사이트의 구조는 3단계나 4단계로 나눠져있다.
2. 3단계는 헤더 / 콘텐츠 / 푸터로 구성
3. 4단계는 헤더 / 내비게이션 / 콘텐츠 / 푸터로 구성
4. 분석 결과
   1. ![image-20200316192240028](https://user-images.githubusercontent.com/50760015/76814752-025b7d00-683f-11ea-9834-3b6791820b0a.png)

### 2. 위의 분석 결과를 바탕으로 전체적인 뼈대를 구성한다.

1. ```html
   <!DOCTYPE html>
   <html lang="ko-KR">
   <head>
       <meta charset="UTF-8">
       <title>웹카페 - HTML5,CSS3,웹표준,웹접근성</title>
   </head>
   <body>
       <div class="container">
           <header class="header">헤더</header>
           <div class="visual">비주얼</div>
           <main class="main">
               <div class="group group1">Group1</div>
               <div class="group group2">Group2</div>
               <div class="group group3">Group3</div>
           </main>
           <article class="slogan">슬로건</article>
           <div class="footer-bg">
               <footer class="footer">푸터</footer>
           </div>
       </div>    
   </body>
   </html>
   ```

2. 결과 : ![image-20200316192325438](https://user-images.githubusercontent.com/50760015/76814770-0daea880-683f-11ea-9753-4ddc3c90fbcd.png)

### 3. 레이아웃을 정의 하기 전 css의 뼈대를 만든다.

 1. 필요한 css의 속성들

    * container
      * header
      * visual
      * main
        * group1
        * group2
        * group3
      * slogan
      * footer-bg
        * footer

	2. ```css
        body {
       /*나중에 reset.css로 정리해준다.*/
       margin: 0;
        }
       
       .container {
       }
       .header {
       }
       .visual {
       }
       
       main {
       }
       .group1 {
       }
       .group2 {
       }
       .group3 {
       }
       
       .slogan {
       }
       
       .footer-bg {
       }
       .footer {
       }
       ```

### 레이아웃을 만들어서 HTML에 정의한다.

1. 나머지는 블록요소처럼 한줄에 하나의 요소만 있지만 main에 group는 인라인요소처림 한줄에 3개의 요소가 들어있다.

2. 모든 요소가 가운데 정렬이 되어있다..

   1. 사용가능한 레이아웃에는 float, position, display : flex, display : gird가 있다.

3. 위의 조건으로 display:flex를 사용하여 레이아웃을 잡아본다.

   1. ```css
      /* 기본 Box Sizing */
      body *,
      body *::before,
      body *::after {
          box-sizing: border-box;
      }
      /* 레이아웃 */
      .header,
      .visual,
      .main,
      .slogan,
      .footer {
          width: 940px;
          margin: 0 auto;
      }
      
      /* 헤더 */
      .header {
      }
      /* 메인 콘텐츠 */
      .main {
          display: flex;
          flex-flow: row nowrap;
          align-items: stretch;
          padding: 30px;
          justify-content: space-evenly;
      }
      .group1 {
          width: 250px;
      }
      .group2 {
          width: 380px;
      }
      .group3 {
          width: 190px;
      }
      
      ```

   2. ![image-20200316193553780](https://user-images.githubusercontent.com/50760015/76814875-62522380-683f-11ea-94e9-6fe10080edda.png)

> 복습 : 현재는 display: flex로만 했지만 다른 3가지 방법으로도 만들어본다.



<hr/>

# 그 외 교수님 소개

> > https://github.com/seulbinim?tab=repositories
> > 수업 예제
> > 김데레사 강사님 / seulbinim@gmail.com
>
> <hr/>
>
> > [troy](http://troy.labs.daum.net/)
> >
> > * 반응형 웹에서 픽셀 계산하기
>
> <hr/>
>
> > 1. ## Web Browser Extension
> >
> >    1. [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) : 웹 브라우저 조작
> >    2. [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) : 헤더 확인
> >    3. [OpenWAX](https://chrome.google.com/webstore/detail/openwax/bfahpbmaknaeohgdklfbobogpdngngoe) : 웹 접근성 확인
> >    4. [tota11y](https://chrome.google.com/webstore/detail/tota11y-plugin-from-khan/oedofneiplgibimfkccchnimiadcmhpe) : wcag에서 몇가지 중요 개념 체크
> >    5. [Gitzip For Github](https://chrome.google.com/webstore/detail/gitzip-for-github/ffabmkklhbepgcgfonabamgnfafbdlkn)

<hr/>

# 2일차 : CSS에 대한 설명

> 알아둘 점 : table와 grid의 차이점
>
> 1. table는 구조 grid는 css이다.
>    1. html은 페이지의 구조를 의미.
>    2. css는 스타일로 웹 페이지를 꾸며줄 때 사용한다.
>
> <hr/>

1. css3은 다양한 모듈들로 이루어져 있다.

   * w3.org/css : 모듈 확인

     1. Rec :  표준으로 채택된 상태
     2. PR : 표준에 제안된 상태
     3. CR : 권고되는 표준 후보 스펙
     4. WD : 초안

   * > tip [브라우저 별 css3 지원 test](http://css3test.com)

2. html은 구조, css는 표현, javascript는 동작으로 구별된다.

   1. 확인해보기 : http://www.csszengarden.com/
   2. css를 제거한 상태
      1. ![image-20200317102815688](https://user-images.githubusercontent.com/50760015/76813106-3ed8aa00-683a-11ea-832f-c363b6df1e0b.png)

   3. css를 입힌 상태
      1. ![image-20200317103043641](https://user-images.githubusercontent.com/50760015/76813156-5f086900-683a-11ea-98bb-0a5b225259eb.png)
      2. ![image-20200317103201104](https://user-images.githubusercontent.com/50760015/76813212-8e1eda80-683a-11ea-8eb9-7b3e78689dbd.png)
   4. css만 바꿔도 다양한 디자인이 나온다.

<hr/>

## 고정형 웹 사이트 header

 	1. 웹카페 -> 테스트링크 -> 네비게이션 순서로 만든다.
      	1. html은 구조만 만든다.(중요!)
      	2. aria-hidden = "true"는 스크린 리더와 같은 보조기술로 탐색할 수 없게 한다.
           	1. NVDA브라우저를 사용하여 들어볼 수 있다.
      	3. 웹 접근성 사이트
           	1. [웹 콘텐츠 접근성 가이드](https://yamoo9.gitbook.io/wcag/international-standards)
           	2. [웹 접근성(널리)](https://nuli.navercorp.com/)
 	2. 시맨틱 마크업/ 네이밍
     * 이미지를 html로 할건가 css로 할건가 정하자
       * img를 사용하거나 baground를 사용한다.
       * 상황에 따라 고정되지 않다.
       * 단 이미지 사용 횟수를 줄이자(수정에 불편)
     * [네이밍 방법론](https://wit.nts-corp.com/2015/04/16/3538)
	3. 