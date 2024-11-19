function showSection(sectionNumber) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  // Remove 'active' class from all tabs and contents
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  // Add 'active' class to the clicked tab and corresponding section
  tabs[sectionNumber - 1].classList.add('active');
  document.getElementById('section' + sectionNumber).classList.add('active');
}
