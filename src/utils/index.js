const sortByDate = (data) => {
  return data.sort(
    (a, b) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
  );
};

export default sortByDate;
