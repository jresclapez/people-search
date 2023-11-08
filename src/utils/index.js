export const getNttPictureUrl = (path) =>
  `${import.meta.env.VITE_SHAREPOINT_NTT_URL}/${path}`;

export const parsePeopleData = (data) => 
  data && Array.isArray(data?.people)
    ? data.people?.map(({ person, follow }) => {
        const { fields, base } = person;
        return {
          id: base.uniqueId,
          name: base.name,
          location: base.location,
          department: base.department,
          picture: getNttPictureUrl(base.picture),
          jobTitle: base.jobTitle,
          employeeNumber: fields.employeeNumber,
          follow: follow,
          email: base.email,
          mobile: base.mobile,
          pageDetailUrl: base.pageDetailUrl,
          account: base.account,
        };
      })
    : [];
