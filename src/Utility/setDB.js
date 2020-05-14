let data=[
    {  
      "Defect Category": "UI",
      "Desciption": "Submit Button coming to the extreme left.",
      "Priority": 2,
      "Status": 0,
      "Change Statue":'',
      "index":0
    },
    {
      "Defect Category": "Functional",
      "Desciption": "While submitting the form data, a confirmation popup should appear.Refer the SRS document",
      "Priority": 1,
      "Status": 0,
      "Change Statue":'',
      "index":1
    },
    {
      "Defect Category": "Change Request",
      "Desciption": "Add remove user functionality",
      "Priority": 3,
      "Status": 1,
      "Change Statue":'',
      "index":2
    },
    {
      "Defect Category": "Functional",
      "Desciption": "Request certificatefunctionality results server error.",
      "Priority": 1,
      "Status": 0,
      "Change Statue":'',
      "index":3
    }
  ]

export let getData = (key) => window.sessionStorage.getItem(key);
export let logout = () => {window.sessionStorage.removeItem('user');}
export default (name,value=JSON.stringify(data))=> window.sessionStorage.setItem(name,value)