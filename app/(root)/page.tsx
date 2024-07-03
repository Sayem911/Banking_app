import HeaderBox from "@/components/ui/HeaderBox";
import RightSideBar from "@/components/ui/RightSideBar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Sayem" , lastName: "Hossen" , email: "skbee911@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-hearder">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your acount and transaction efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT Transaction
      </div>
      <RightSideBar 
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 123.50},{currentBalance: 500}]}
      />
    </section>
  );
};

export default Home;
