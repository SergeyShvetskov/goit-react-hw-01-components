export const TransactionHistory = ( transactions) => (
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

        <tbody>
            
                 {
                    console.log(transactions)
                }
             {/* {transactions.map((item) => (
                console.log(item.type)
                
             ))}  */}
  </tbody>
</table>
);

/* <tr>
                     <td>1</td>
                     <td>2</td>
                     <td>3</td>
                 </tr> */