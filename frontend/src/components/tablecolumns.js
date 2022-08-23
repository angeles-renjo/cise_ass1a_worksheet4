      function alertFunction() {
          alert("Your status is updated!")
      }
// eslint-disable-next-line no-sparse-arrays
const tablecolumns = [
    {
      Header: 'Title',
      accessor: 'title'
    }, {
      Header: 'Authors',
      accessor: 'authors'
    }, {
      Header: 'Source',
      accessor: 'source'
    }, {
      Header: 'Pub. Year',
      accessor: 'pubyear'
    },{
      Header: 'DOI',
      accessor: 'doi'
    },,{
      Header: 'Claimed Benefit',
      accessor: 'claim'
    },{
      Header: 'Level of Evidence',
      accessor: 'evidence'
    },
    {
      Header: 'Status',
      accessor: 'status',
       Cell: ({ cell }) => (
        <p value={cell.row.values.name}>
          unapprove
        </p>
      )
    },
    {
      width: 300,
      Header: "Click to Update",
      Cell: ({ cell }) => (
        <button value={cell.row.values.name} onClick={alertFunction}>
          update
        </button>
        
      )
    }

  ]
  export default tablecolumns;