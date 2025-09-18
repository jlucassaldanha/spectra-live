import "./UserListSectionSkeleton.css"

function UserListSectionSkeleton({turns, type = "info"}: {turns: number, type?: "info" | "input"}) {  
    return (
        <div className="modDivSK">
          <div className="counterSK">
            <div className="iconSK"></div>
            <div className="textWhiteSK"></div>
          </div>
          {type === "input" && (
            <div className="infoBoxSK">
              <div className="textSK"></div>
              <div className="inputSK"></div>
            </div>
          )}
          <div className="userListSK">
            {[...Array(turns)].map((_d, i) => {
              return (
                <div className="userSK" key={i}>
                  <div className="userContainerSK">
                    <div className="userLinkHSK" >
                      <div className="userImgSmSK" ></div>
                      <div className="userNameTextSmSK"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
}

export default UserListSectionSkeleton