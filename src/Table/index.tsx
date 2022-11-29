import "./index.css"

function Table() {
  return (
    <div className="table bordered wrapper">
      {/* 表头 */}
      <div className="row header">
        <div className="col">
          <div className="col-content">Name</div>
        </div>
        <div className="col">
          <div className="col-content">Age</div>
        </div>
        <div className="col">
          <div className="col-content">Position</div>
        </div>
        {/* 关注这里 */}
        <div
          className="table"
          style={{
            // 这个大小 考虑 Condition 内的数量
            flex: 3,
          }}
        >
          <div className="row">
            <div className="col">
              <div className="col-content">Condition</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="col-content">Condition 0</div>
            </div>
            <div className="col">
              <div className="col-content">Condition 1</div>
            </div>
            <div className="col">
              <div className="col-content">Condition 2</div>
            </div>
          </div>
        </div>
      </div>

      {/* 表body */}
      {/* 第一条数据 */}
      <div className="row">
        <div className="col">
          <div className="col-content">SedationH</div>
        </div>
        <div className="col">
          <div className="col-content">21</div>
        </div>
        <div className="col">
          <div className="col-content">China Hangzhou</div>
        </div>
        <div
          className="table"
          style={{
            // 这个大小 考虑 Condition 内的数量
            flex: 3,
          }}
        >
          <div className="row">
            <div className="col">
              <div className="col-content">{"> 1"}</div>
            </div>
            <div className="col">
              <div className="col-content">{"< 2"}</div>
            </div>
            <div className="col">
              <div className="col-content">👀</div>
            </div>
          </div>
        </div>
      </div>

      {/* 第二条数据 */}
      <div className="row">
        <div className="col">
          <div className="col-content">SedationH</div>
        </div>
        <div className="col">
          <div className="col-content">21</div>
        </div>
        <div className="col">
          <div className="col-content">China Hangzhou</div>
        </div>
        <div
          className="table"
          style={{
            // 这个大小 考虑 Condition 内的数量
            flex: 3,
          }}
        >
          <div className="row">
            <div className="col">
              <div className="col-content">{Array.from({ length: 100 }, () => ">= 1").join("")}</div>
            </div>
            <div className="col">
              <div className="col-content">{"<= 2"}</div>
            </div>
            <div className="col">
              <div className="col-content">=</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="col-content">-</div>
            </div>
            <div className="col">
              <div className="col-content">{Array.from({ length: 100 }, () => "😊")}</div>
            </div>
            <div className="col">
              <div className="col-content">-</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="col-content">{"> 1"}</div>
            </div>
            <div className="col">
              <div className="col-content">{"< 2"}</div>
            </div>
            <div className="col">
              <div className="col-content">-</div>
            </div>
          </div>
        </div>
      </div>

      {/* 三数据 */}
      <div className="row">
        <div className="col">
          <div className="col-content">SedationH</div>
        </div>
        <div className="col">
          <div className="col-content">21</div>
        </div>
        <div className="col">
          <div className="col-content">China Hangzhou</div>
        </div>
        <div
          className="table"
          style={{
            // 这个大小 考虑 Condition 内的数量
            flex: 3,
          }}
        >
          <div className="row">
            <div className="col">
              <div className="col-content">{"> 1"}</div>
            </div>
            <div className="col">
              <div className="col-content">{"< 2"}</div>
            </div>
            <div className="col">
              <div className="col-content">👀</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
