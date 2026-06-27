const Search = () => {
  return (
    <div className="form-search-wrap p-2" data-aos="fade-up" data-aos-delay="200">
        <form method="post">
        <div className="row align-items-center">
            <div className="col-lg-12 col-xl-4 no-sm-border border-right">
            <input type="text" className="form-control" placeholder="What are you looking for?"/>
            </div>
            <div className="col-lg-12 col-xl-3 no-sm-border border-right">
            <div className="wrap-icon">
                <span className="icon icon-room"></span>
                <input type="text" className="form-control" placeholder="Location"/>
            </div>
            
            </div>
            <div className="col-lg-12 col-xl-3">
            <div className="select-wrap">
                <span className="icon"><span className="icon-keyboard_arrow_down"></span></span>
                <select className="form-control" name="" id="">
                <option value="">All Categories</option>
                <option value="">Hotels</option>
                <option value="">Restaurant</option>
                <option value="">Eat &amp; Drink</option>
                <option value="">Events</option>
                <option value="">Fitness</option>
                <option value="">Others</option>
                </select>
            </div>
            </div>
            <div className="col-lg-12 col-xl-2 ml-auto text-right">
            <input type="submit" className="btn text-white btn-primary" value="Search"/>
            </div>
            
        </div>
        </form>
    </div>
  )
}
export default Search;