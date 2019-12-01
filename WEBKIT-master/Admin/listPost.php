	<?php
	require_once "ClassDatabase.php";
	require_once "library.php";

	if(isset($_GET['getData'])){
		$database = new Database();

		$database->connect();
		$result = array();
		$start = mysqli_real_escape_string($database->connect,$_GET['start']);
		$limit = mysqli_real_escape_string($database->connect,$_GET['limit']);
		$sql          = "SELECT id,images,title,description,content FROM news ORDER BY id DESC LIMIT $start," . ($limit);
		$query = mysqli_query($database->connect, $sql) or die('Lỗi câu truy vấn');
		// print_r((array)$query);
		if(mysqli_num_rows($query) > 0){
			$response = "";
			while($result = mysqli_fetch_array($query)){
				$response .= '
				<tr>
					<td>
						<img src="'.$result["images"].'" alt="" width="70px" height="80px">
					</td>
					<td style="white-space: nowrap;text-overflow:hover;overflow: hidden;">
						'.$result["title"].'
					</td>;
					<td>
						'.$result["description"].'
					</td>
					<td>
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalShowNews">Hiển Thị</button>
					</td>
					<td>
						<button type="submit" class="btn btn-primary repair" value='.$result["id"].'>Sửa</button>
						<button type="submit" class="btn btn-danger delete" value='.$result["id"].'>Xóa</button>
					</td>
				</tr>'
				;					// echo $result['id'];
			}
			echo json_encode([
				"code" => 200,
				"data" => $response
			]);
		}
		else{
			echo json_encode([
				"code" => 202,
				"data" => "stopped"
			]);
		}	
	}	
	?>