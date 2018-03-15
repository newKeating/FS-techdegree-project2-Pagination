const $page = $('.page');
const studentList = document.querySelectorAll(".student-item");
const $studentList = $('.student-item');
const $pageHeader = $('.page-header');

const showPage = (pageNumber, studentList) => {
  // first hide all students on the page
  $studentList.hide();
  // Then loop through all students in our student list argument
  let startIndex = 10*pageNumber-10;
  let endIndex = startIndex+9;
  for(let i = startIndex; i <= endIndex; i++) {
    if(studentList[i]) {
      studentList[i].style.display = "block";
    }
  }
}

const createSearchInput = () => {
  const $searchInputHTML =
    $(`<div class="student-search">
      <input placeholder="Search for students...">
      <button>Search</button>
    </div>`)
  $pageHeader.append($searchInputHTML);
}

const appendPageLinks = (studentList) => {
  // determine how many pages for this student list
  let numOfPages = Math.ceil(studentList.length/10);
  // create a page link section
  const $pagination = $(`<div class="pagination"><ul></ul></div>`);
  $page.append($pagination)
  // “for” every page
  const $paginationUl = $('.pagination ul');
  let pageListHTML = "";
  for( let i = 1; i <= numOfPages; i++) {
    if(i === 1) {
      pageListHTML += `<li><a class="active" href="#">${i}</a></li>`;
    } else {
      pageListHTML += `<li><a href="#">${i}</a></li>`;
    }
  }
  // add a page link to the page link section
  $paginationUl.html(pageListHTML);
  // remove the old page link section from the site
  // append our new page link section to the site
  let pageNumber = $('.active').text();
  showPage(pageNumber, studentList);
  // define what happens when you click a link
  const $paginationDiv = $(".pagination");
  $paginationDiv.on('click', (event) => {
    $('.active').removeClass('active');
    $(event.target).addClass('active');
    showPage(event.target.textContent, studentList);
  });
    // Use the showPage function to display the page for the link clicked
    // mark that link as “active”

}
//
// const searchList = () => {
//   // Obtain the value of the search input
//   const $searchInput = $('.student-search input').val();
//   const studentNames = document.querySelectorAll('.student-item h3');
//   const studentEmails = document.querySelectorAll('.student-item span.email');
//   $('.pagination').remove;
//   let searchStudentList = [];
//   for(let i=0; i <= studentList.length; i++) {
//     if ($searchInput === studentNames[i] || $searchInput === studentEmails[i]) {
//       searchStudentList.push(studentList[i]);
//     }
//   }
//   appendPageLinks(searchStudentList);
//     // remove the previous page link section
//     // Loop over the student list, and for each student…
// // ...obtain the student’s name…
// // ...and the student’s email…
// // ...if the search value is found inside either email or name…
//     		// ...add this student to list of “matched” student
//     // If there’s no “matched” students…
//            // ...display a “no student’s found” message
//     // If over ten students were found…
//            // ...call appendPageLinks with the matched students
//    // Call showPage to show first ten students of matched list
// }

// createSearchInput();
appendPageLinks(studentList);
