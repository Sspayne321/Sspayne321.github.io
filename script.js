function showSection(sectionNumber) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  tabs[sectionNumber - 1].classList.add('active');
  document.getElementById('section' + sectionNumber).classList.add('active');
}
